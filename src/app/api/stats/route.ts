import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/stats
export async function GET() {
  try {
    const stats = await db.siteStat.findMany()
    const map: Record<string, string> = {}
    for (const s of stats) map[s.key] = s.value

    const counts = await db.artwork.groupBy({ by: ['category'], _count: true })
    const categoryCounts: Record<string, number> = {}
    for (const c of counts) categoryCounts[c.category] = c._count

    return NextResponse.json({ stats: map, categoryCounts })
  } catch (e) {
    console.error('GET /api/stats error', e)
    return NextResponse.json({ error: 'internal' }, { status: 500 })
  }
}
