import { NextRequest, NextResponse } from 'next/server'
import { WORKS } from '@/lib/data'

// GET /api/works?category=animation&featured=true
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category')
  const featured = searchParams.get('featured')

  let works = WORKS
  if (category && category !== 'all') {
    works = works.filter((w) => w.category === category)
  }
  if (featured === 'true') {
    works = works.filter((w) => w.featured)
  }
  works = [...works].sort((a, b) => a.order - b.order)

  return NextResponse.json({ works })
}
