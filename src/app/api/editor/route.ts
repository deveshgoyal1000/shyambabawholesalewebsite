import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile, mkdir } from 'fs/promises'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'home-puck.json')

export async function GET() {
  try {
    const raw = await readFile(dataFilePath, 'utf-8')
    const data = JSON.parse(raw)
    return NextResponse.json({ success: true, data })
  } catch (err) {
    return NextResponse.json({ success: false, data: null })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const dir = path.dirname(dataFilePath)
    await mkdir(dir, { recursive: true })
    await writeFile(dataFilePath, JSON.stringify(body, null, 2), 'utf-8')
    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Error saving editor data:', err)
    return NextResponse.json(
      { success: false, error: err.message || 'Failed to save' },
      { status: 500 }
    )
  }
}
