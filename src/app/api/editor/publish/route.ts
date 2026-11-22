import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { revalidatePath } from 'next/cache'
import { readFile, writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export const dynamic = 'force-dynamic'
export const revalidate = 0

const localPuckPath = path.join(process.cwd(), 'src', 'data', 'home-puck.json')
const localCatalogPath = path.join(process.cwd(), 'src', 'data', 'catalog.json')
const localCountryOverridesPath = path.join(process.cwd(), 'src', 'data', 'countryOverrides.json')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const target = body.target || 'staging' // 'staging' | 'main'
    const puckData = body.data

    if (puckData) {
      const jsonString = JSON.stringify(puckData, null, 2)
      // Save locally to src/data/home-puck.json
      await mkdir(path.dirname(localPuckPath), { recursive: true })
      await writeFile(localPuckPath, jsonString, 'utf-8')
    }

    if (target === 'staging') {
      try {
        revalidatePath('/', 'layout')
        revalidatePath('/editor', 'page')
      } catch (e) {}

      return NextResponse.json({
        success: true,
        target: 'staging',
        url: 'http://localhost:3000',
        message: 'Successfully published to Staging Site (Local Preview)!',
      })
    }

    // TARGET: 'main' (Production Live Site)
    if (target === 'main') {
      let blobUrl = null

      // 1. Sync home-puck.json to Vercel Blob
      if (process.env.BLOB_READ_WRITE_TOKEN && puckData) {
        try {
          const jsonString = JSON.stringify(puckData, null, 2)
          const blob = await put('home-puck.json', jsonString, {
            access: 'public',
            addRandomSuffix: false,
            allowOverwrite: true,
          })
          blobUrl = blob.url
        } catch (blobErr: any) {
          console.error('Vercel Blob sync error for home-puck:', blobErr)
        }
      }

      // 2. Sync catalog.json to Vercel Blob as well
      if (process.env.BLOB_READ_WRITE_TOKEN) {
        try {
          const catalogRaw = await readFile(localCatalogPath, 'utf-8')
          await put('catalog.json', catalogRaw, {
            access: 'public',
            addRandomSuffix: false,
            allowOverwrite: true,
          })
        } catch (blobCatErr: any) {
          console.warn('Vercel Blob sync error for catalog:', blobCatErr)
        }
      }

      // 3. Sync countryOverrides.json to Vercel Blob
      if (process.env.BLOB_READ_WRITE_TOKEN) {
        try {
          const countryRaw = await readFile(localCountryOverridesPath, 'utf-8')
          await put('countryOverrides.json', countryRaw, {
            access: 'public',
            addRandomSuffix: false,
            allowOverwrite: true,
          })
        } catch (blobCountryErr: any) {
          console.warn('Vercel Blob sync error for country overrides:', blobCountryErr)
        }
      }

      // 4. Commit and push to Git so Vercel deploys code changes to production
      try {
        await execAsync('git add src/ public/')
        await execAsync('git commit -m "CMS: Publish to main live site"')
        await execAsync('git push origin main')
        console.log('Successfully pushed changes to origin main')
      } catch (gitErr: any) {
        // If nothing to commit or push already up to date, that is fine
        console.log('Git commit/push output:', gitErr.message || gitErr)
      }

      // 5. Revalidate cache
      try {
        revalidatePath('/', 'layout')
        revalidatePath('/collections', 'layout')
        revalidatePath('/international', 'layout')
      } catch (e) {}

      return NextResponse.json({
        success: true,
        target: 'main',
        url: 'https://shyambabawholesalewebsite.vercel.app',
        message: '🚀 Successfully published to Main Live Website! Changes are now deploying live.',
      })
    }

    return NextResponse.json({ success: false, error: 'Invalid target specified' }, { status: 400 })
  } catch (err: any) {
    console.error('Error in /api/editor/publish:', err)
    return NextResponse.json({ success: false, error: err.message || 'Publish failed' }, { status: 500 })
  }
}
