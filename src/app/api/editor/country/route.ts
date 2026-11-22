import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { getCountryBySlug, internationalCountries } from '@/data/internationalCountries'

const overridesFilePath = path.join(process.cwd(), 'src', 'data', 'countryOverrides.json')

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')

    if (slug) {
      const countryData = getCountryBySlug(slug)
      return NextResponse.json({ success: true, country: countryData })
    }

    // Return all supported countries
    const countries = Object.keys(internationalCountries).map((key) => getCountryBySlug(key))
    // Filter duplicates by country shortName
    const uniqueMap = new Map()
    for (const c of countries) {
      if (!uniqueMap.has(c.shortName)) {
        uniqueMap.set(c.shortName, c)
      }
    }
    return NextResponse.json({ success: true, countries: Array.from(uniqueMap.values()) })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { slug, overrides } = body

    if (!slug || !overrides) {
      return NextResponse.json(
        { success: false, error: 'Missing slug or overrides data' },
        { status: 400 }
      )
    }

    const normalized = slug.toLowerCase().trim()
    let currentOverrides: Record<string, any> = {}

    if (fs.existsSync(overridesFilePath)) {
      try {
        const content = fs.readFileSync(overridesFilePath, 'utf-8')
        currentOverrides = JSON.parse(content)
      } catch (e) {
        currentOverrides = {}
      }
    }

    currentOverrides[normalized] = {
      ...(currentOverrides[normalized] || {}),
      ...overrides,
    }

    fs.writeFileSync(overridesFilePath, JSON.stringify(currentOverrides, null, 2), 'utf-8')

    return NextResponse.json({
      success: true,
      message: `Updated settings for ${slug}`,
      country: getCountryBySlug(normalized),
    })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
