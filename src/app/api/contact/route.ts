import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// POST /api/contact
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, projectType, message, budget } = body ?? {}

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Nombre requerido' }, { status: 400 })
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }
    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json({ error: 'Mensaje requerido' }, { status: 400 })
    }

    const sub = await db.contactSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        projectType: projectType ?? null,
        message: message.trim(),
        budget: budget ?? null,
      },
    })

    return NextResponse.json({ ok: true, id: sub.id })
  } catch (e) {
    console.error('POST /api/contact error', e)
    return NextResponse.json({ error: 'internal' }, { status: 500 })
  }
}

// GET /api/contact
export async function GET() {
  try {
    const subs = await db.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    })
    return NextResponse.json({ submissions: subs })
  } catch (e) {
    console.error('GET /api/contact error', e)
    return NextResponse.json({ error: 'internal' }, { status: 500 })
  }
}
