import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { writeFile, readFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const categorySlug = (formData.get('categorySlug') as string) || 'premium-jewellery'
    const subcategorySlug = (formData.get('subcategorySlug') as string) || ''
    const files = formData.getAll('files') as File[]

    if (!files || files.length === 0) {
      return NextResponse.json({ success: false, error: 'No files provided for bulk upload' }, { status: 400 })
    }

    const catalogPath = path.join(process.cwd(), 'src', 'data', 'catalog.json')
    const catalogRaw = await readFile(catalogPath, 'utf8')
    const catalog = JSON.parse(catalogRaw)

    const targetCategory = catalog.find((c: any) => c.slug === categorySlug)
    if (!targetCategory) {
      return NextResponse.json({ success: false, error: `Category ${categorySlug} not found` }, { status: 404 })
    }

    let targetSub = null
    if (subcategorySlug && targetCategory.subcategories) {
      targetSub = targetCategory.subcategories.find((s: any) => s.slug === subcategorySlug)
    }

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    await mkdir(uploadsDir, { recursive: true })

    const newProducts: any[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
      const fileName = `${Date.now()}-${i}-${cleanFileName}`

      let fileUrl = `/uploads/${fileName}`

      // If Vercel Blob configured
      if (process.env.BLOB_READ_WRITE_TOKEN) {
        try {
          const blob = await put(`uploads/${fileName}`, buffer, { access: 'public' })
          fileUrl = blob.url
        } catch (e) {
          console.warn('Vercel Blob failed, falling back to local file:', e)
        }
      }

      // Local write fallback
      const localFilePath = path.join(uploadsDir, fileName)
      await writeFile(localFilePath, buffer)

      // Derive code from filename (e.g. SB-102.jpg or 405-bangle.jpg -> SB-102 or SB-405)
      const baseName = file.name.replace(/\.[^/.]+$/, '').toUpperCase()
      const codeMatch = baseName.match(/(SB-[A-Z0-9]+|[A-Z]{1,3}-[0-9]+|[0-9]{3,6})/)
      const derivedCode = codeMatch ? (codeMatch[0].startsWith('SB-') ? codeMatch[0] : `SB-${codeMatch[0]}`) : `SB-${Date.now().toString(36).toUpperCase().slice(-4)}${i}`

      const newProductItem = {
        id: `${targetSub ? targetSub.slug : targetCategory.slug}-${Date.now()}-${i}`,
        code: derivedCode,
        rawFilename: file.name,
        src: fileUrl,
      }

      if (targetSub) {
        if (!targetSub.images) targetSub.images = []
        targetSub.images.unshift(newProductItem)
        targetSub.itemCount = targetSub.images.length
      } else {
        if (!targetCategory.images) targetCategory.images = []
        targetCategory.images.unshift(newProductItem)
      }

      newProducts.push(newProductItem)
    }

    // Recalculate total items for category
    if (targetCategory.subcategories) {
      targetCategory.totalItems = targetCategory.subcategories.reduce(
        (sum: number, s: any) => sum + (s.images?.length || s.itemCount || 0),
        0
      )
    } else if (targetCategory.images) {
      targetCategory.totalItems = targetCategory.images.length
    }

    // Save updated catalog.json
    await writeFile(catalogPath, JSON.stringify(catalog, null, 2), 'utf8')

    return NextResponse.json({
      success: true,
      message: `Successfully uploaded ${newProducts.length} products to ${targetSub ? targetSub.name : targetCategory.name}!`,
      count: newProducts.length,
      products: newProducts,
    })
  } catch (error: any) {
    console.error('Error in bulk upload:', error)
    return NextResponse.json({ success: false, error: error.message || 'Bulk upload failed' }, { status: 500 })
  }
}
