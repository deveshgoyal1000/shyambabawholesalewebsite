import { NextRequest, NextResponse } from 'next/server'
import { put, list } from '@vercel/blob'
import { revalidatePath } from 'next/cache'
import { readFile, writeFile, mkdir } from 'fs/promises'
import path from 'path'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const localFilePath = path.join(process.cwd(), 'src', 'data', 'home-puck.json')

export async function GET() {
  try {
    // 1. Try Vercel Blob first (Production & Preview)
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        const { blobs } = await list({ prefix: 'home-puck.json' })
        if (blobs.length > 0) {
          const res = await fetch(`${blobs[0].url}?t=${Date.now()}`, { cache: 'no-store' })
          if (res.ok) {
            const data = await res.json()
            return NextResponse.json({ success: true, data })
          }
        }
      } catch (blobErr) {
        console.warn('Vercel Blob fetch fallback:', blobErr)
      }
    }

    // 2. Fallback to local filesystem (Local dev)
    const raw = await readFile(localFilePath, 'utf-8')
    const data = JSON.parse(raw)
    return NextResponse.json({ success: true, data })
  } catch (err) {
    return NextResponse.json({ success: false, data: null })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const jsonString = JSON.stringify(body, null, 2)

    // 1. Save to Vercel Blob (Cloud persistence for Vercel)
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        await put('home-puck.json', jsonString, {
          access: 'public',
          addRandomSuffix: false,
          allowOverwrite: true,
        })
      } catch (blobErr: any) {
        console.error('Error saving to Vercel Blob:', blobErr)
      }
    }

    // 2. Also save to local file system if available (Local dev)
    try {
      const dir = path.dirname(localFilePath)
      await mkdir(dir, { recursive: true })
      await writeFile(localFilePath, jsonString, 'utf-8')
    } catch (fsErr) {
      // Ignored in read-only environments like Vercel Lambda
    }

    // 3. Purge Vercel cache for the homepage immediately
    try {
      revalidatePath('/', 'layout')
    } catch (revErr) {
      console.warn('revalidatePath error:', revErr)
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Error in /api/editor:', err)
    return NextResponse.json(
      { success: false, error: err.message || 'Failed to save' },
      { status: 500 }
    )
  }
}
