import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/works/[id]
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const work = await db.artwork.findUnique({ where: { id } })
    if (!work) return NextResponse.json({ error: 'not found' }, { status: 404 })
    return NextResponse.json({ work })
  } catch (e) {
    console.error('GET /api/works/[id] error', e)
    return NextResponse.json({ error: 'internal' }, { status: 500 })
  }
}
