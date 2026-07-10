import { NextResponse } from 'next/server'
import { computeStats } from '@/lib/data'

// GET /api/stats
export async function GET() {
  return NextResponse.json(computeStats())
}
