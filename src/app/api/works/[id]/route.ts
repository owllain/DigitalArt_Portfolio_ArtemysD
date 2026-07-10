import { NextResponse } from 'next/server'
import { WORKS } from '@/lib/data'

// GET /api/works/[id]
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const work = WORKS.find((w) => w.id === id)
  if (!work) return NextResponse.json({ error: 'not found' }, { status: 404 })
  return NextResponse.json({ work })
}
