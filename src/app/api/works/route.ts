import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/works?category=animation&featured=true
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')

    const where: {
      category?: string
      featured?: boolean
    } = {}
    if (category && category !== 'all') where.category = category
    if (featured === 'true') where.featured = true

    const works = await db.artwork.findMany({
      where,
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    })

    return NextResponse.json({ works })
  } catch (e) {
    console.error('GET /api/works error', e)
    return NextResponse.json({ error: 'internal' }, { status: 500 })
  }
}
