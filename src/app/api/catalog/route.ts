import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import { put, list } from '@vercel/blob'
import { revalidatePath } from 'next/cache'

export const dynamic = 'force-dynamic'

const catalogFilePath = path.join(process.cwd(), 'src', 'data', 'catalog.json')

async function getCatalogData() {
  // 1. Try local filesystem first (Primary source of truth with 1,000+ real products)
  try {
    const raw = await readFile(catalogFilePath, 'utf-8')
    const parsed = JSON.parse(raw)
    if (parsed && Array.isArray(parsed) && parsed.length > 0) {
      return parsed
    }
  } catch (fsErr) {
    // If not found on local, fallback to Blob
  }

  // 2. Fallback to Vercel Blob (for serverless environments without local filesystem)
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { blobs } = await list({ prefix: 'catalog.json' })
      if (blobs.length > 0) {
        const sorted = blobs.sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime())
        const res = await fetch(`${sorted[0].url}?t=${Date.now()}`, { cache: 'no-store' })
        if (res.ok) {
          return await res.json()
        }
      }
    } catch (blobErr) {
      console.warn('Vercel Blob catalog fetch fallback:', blobErr)
    }
  }

  return []
}

async function saveCatalogData(data: any) {
  const jsonString = JSON.stringify(data, null, 2)

  // 1. Save to Vercel Blob if available
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      await put('catalog.json', jsonString, {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true,
      })
    } catch (blobErr) {
      console.error('Error saving catalog to Vercel Blob:', blobErr)
    }
  }

  // 2. Also save to local filesystem if available
  try {
    await writeFile(catalogFilePath, jsonString, 'utf-8')
  } catch (fsErr) {
    // Ignored in read-only environments
  }

  try {
    revalidatePath('/collections', 'layout')
    revalidatePath('/', 'layout')
  } catch (e) {}
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categorySlug = searchParams.get('category')
    const subcategorySlug = searchParams.get('subcategory')
    const search = searchParams.get('search')?.toLowerCase()
    const limit = parseInt(searchParams.get('limit') || '100', 10)
    const page = parseInt(searchParams.get('page') || '1', 10)

    const categories = await getCatalogData()

    // Flatten products
    let allProducts: any[] = []

    categories.forEach((cat: any) => {
      if (cat.images && Array.isArray(cat.images)) {
        cat.images.forEach((img: any) => {
          allProducts.push({
            ...img,
            categorySlug: cat.slug,
            categoryName: cat.name,
            subcategorySlug: null,
            subcategoryName: null,
          })
        })
      }

      if (cat.subcategories && Array.isArray(cat.subcategories)) {
        cat.subcategories.forEach((sub: any) => {
          if (sub.images && Array.isArray(sub.images)) {
            sub.images.forEach((img: any) => {
              allProducts.push({
                ...img,
                categorySlug: cat.slug,
                categoryName: cat.name,
                subcategorySlug: sub.slug,
                subcategoryName: sub.name,
              })
            })
          }
        })
      }
    })

    // Filter by category
    if (categorySlug && categorySlug !== 'all') {
      allProducts = allProducts.filter(
        (p) => p.categorySlug === categorySlug || p.subcategorySlug === categorySlug
      )
    }

    if (subcategorySlug) {
      allProducts = allProducts.filter((p) => p.subcategorySlug === subcategorySlug)
    }

    // Filter by search keyword
    if (search) {
      allProducts = allProducts.filter(
        (p) =>
          p.code?.toLowerCase().includes(search) ||
          p.categoryName?.toLowerCase().includes(search) ||
          p.subcategoryName?.toLowerCase().includes(search)
      )
    }

    const total = allProducts.length
    const startIndex = (page - 1) * limit
    const paginatedProducts = allProducts.slice(startIndex, startIndex + limit)

    // Summary of categories with subcategories and their image items
    const categoriesSummary = categories.map((c: any) => ({
      slug: c.slug,
      name: c.name,
      description: c.description,
      coverImage: c.coverImage,
      totalItems: c.totalItems,
      images: c.images || [],
      subcategories: (c.subcategories || []).map((s: any) => ({
        slug: s.slug,
        name: s.name,
        description: s.description,
        coverImage: s.coverImage,
        itemCount: s.itemCount || s.images?.length || 0,
        images: s.images || [],
      })),
    }))

    return NextResponse.json({
      success: true,
      total,
      page,
      limit,
      categories: categoriesSummary,
      products: paginatedProducts,
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch catalog' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { code, src, categorySlug, subcategorySlug } = body

    if (!code || !src || !categorySlug) {
      return NextResponse.json(
        { success: false, error: 'Code, image URL, and category are required' },
        { status: 400 }
      )
    }

    const categories = await getCatalogData()
    const targetCat = categories.find((c: any) => c.slug === categorySlug)

    if (!targetCat) {
      return NextResponse.json(
        { success: false, error: `Category '${categorySlug}' not found` },
        { status: 404 }
      )
    }

    const newProduct = {
      id: `prod-${Date.now()}`,
      code: code.trim(),
      rawFilename: `${code.trim()}.jpg`,
      src: src.trim(),
    }

    if (subcategorySlug && targetCat.subcategories) {
      const targetSub = targetCat.subcategories.find((s: any) => s.slug === subcategorySlug)
      if (targetSub) {
        if (!targetSub.images) targetSub.images = []
        targetSub.images.unshift(newProduct)
        targetSub.itemCount = (targetSub.itemCount || 0) + 1
        targetCat.totalItems = (targetCat.totalItems || 0) + 1
      } else {
        return NextResponse.json(
          { success: false, error: `Subcategory '${subcategorySlug}' not found` },
          { status: 404 }
        )
      }
    } else {
      if (!targetCat.images) targetCat.images = []
      targetCat.images.unshift(newProduct)
      targetCat.totalItems = (targetCat.totalItems || 0) + 1
    }

    await saveCatalogData(categories)

    return NextResponse.json({
      success: true,
      message: 'Product added successfully to catalog',
      product: newProduct,
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to save product' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const code = searchParams.get('code')
    const clearSubcategory = searchParams.get('clearSubcategory') === 'true'
    const categorySlug = searchParams.get('category')
    const subcategorySlug = searchParams.get('subcategory')

    // Handle clearing all images from a subcategory
    if (clearSubcategory && categorySlug && subcategorySlug) {
      const categories = await getCatalogData()
      const targetCat = categories.find((c: any) => c.slug === categorySlug)
      if (targetCat && targetCat.subcategories) {
        const targetSub = targetCat.subcategories.find((s: any) => s.slug === subcategorySlug)
        if (targetSub) {
          const removedCount = targetSub.images?.length || 0
          targetSub.images = []
          targetSub.itemCount = 0
          targetCat.totalItems = Math.max(0, (targetCat.totalItems || 0) - removedCount)
          await saveCatalogData(categories)
          return NextResponse.json({
            success: true,
            message: `Cleared all ${removedCount} images from ${targetSub.name}`,
          })
        }
      }
      return NextResponse.json({ success: false, error: 'Subcategory not found' }, { status: 404 })
    }

    if (!id && !code) {
      return NextResponse.json(
        { success: false, error: 'Product ID or Code is required to delete' },
        { status: 400 }
      )
    }

    const categories = await getCatalogData()
    let found = false

    categories.forEach((cat: any) => {
      if (cat.images && Array.isArray(cat.images)) {
        const initialLength = cat.images.length
        cat.images = cat.images.filter((img: any) => img.id !== id && img.code !== code)
        if (cat.images.length !== initialLength) {
          cat.totalItems = Math.max(0, (cat.totalItems || 0) - (initialLength - cat.images.length))
          found = true
        }
      }

      if (cat.subcategories && Array.isArray(cat.subcategories)) {
        cat.subcategories.forEach((sub: any) => {
          if (sub.images && Array.isArray(sub.images)) {
            const initialLength = sub.images.length
            sub.images = sub.images.filter((img: any) => img.id !== id && img.code !== code)
            if (sub.images.length !== initialLength) {
              const diff = initialLength - sub.images.length
              sub.itemCount = Math.max(0, (sub.itemCount || 0) - diff)
              cat.totalItems = Math.max(0, (cat.totalItems || 0) - diff)
              found = true
            }
          }
        })
      }
    })

    if (!found) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 })
    }

    await saveCatalogData(categories)

    return NextResponse.json({ success: true, message: 'Product deleted successfully' })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete product' },
      { status: 500 }
    )
  }
}
