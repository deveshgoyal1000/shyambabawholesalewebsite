import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { categorySlug, subcategorySlug, name, description, coverImage } = body

    if (!categorySlug) {
      return NextResponse.json({ success: false, error: 'categorySlug is required' }, { status: 400 })
    }

    const catalogPath = path.join(process.cwd(), 'src', 'data', 'catalog.json')
    const catalogRaw = await readFile(catalogPath, 'utf8')
    const catalog = JSON.parse(catalogRaw)

    const category = catalog.find((c: any) => c.slug === categorySlug)
    if (!category) {
      return NextResponse.json({ success: false, error: 'Category not found' }, { status: 404 })
    }

    if (subcategorySlug && category.subcategories) {
      const sub = category.subcategories.find((s: any) => s.slug === subcategorySlug)
      if (!sub) {
        return NextResponse.json({ success: false, error: 'Subcategory not found' }, { status: 404 })
      }
      if (name !== undefined) sub.name = name
      if (description !== undefined) sub.description = description
      if (coverImage !== undefined) sub.coverImage = coverImage
    } else {
      if (name !== undefined) category.name = name
      if (description !== undefined) category.description = description
      if (coverImage !== undefined) category.coverImage = coverImage
    }

    await writeFile(catalogPath, JSON.stringify(catalog, null, 2), 'utf8')

    return NextResponse.json({
      success: true,
      message: 'Category updated successfully!',
      category,
    })
  } catch (err: any) {
    console.error('Error updating category:', err)
    return NextResponse.json({ success: false, error: err.message || 'Update failed' }, { status: 500 })
  }
}
