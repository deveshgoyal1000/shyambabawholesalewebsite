import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
    const fileName = `${Date.now()}-${cleanName}`

    // 1. If Vercel Blob is configured (Production), upload directly to Vercel Blob CDN
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        const blob = await put(`uploads/${fileName}`, buffer, {
          access: 'public',
        })
        return NextResponse.json({
          success: true,
          url: blob.url,
        })
      } catch (blobErr: any) {
        console.warn('Vercel Blob upload failed, falling back to local:', blobErr)
      }
    }

    // 2. Local filesystem fallback (Local dev)
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    await mkdir(uploadsDir, { recursive: true })
    const filePath = path.join(uploadsDir, fileName)
    await writeFile(filePath, buffer)

    return NextResponse.json({
      success: true,
      url: `/uploads/${fileName}`,
    })
  } catch (error: any) {
    console.error('Error saving uploaded file:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Upload failed' },
      { status: 500 }
    )
  }
}
