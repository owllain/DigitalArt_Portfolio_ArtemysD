import { NextRequest, NextResponse } from 'next/server'

// POST /api/contact
// Para producción en Vercel, conecta aquí un servicio de email
// (p.ej. Resend, Nodemailer, Formspree) o usa un form endpoint externo.
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

    // TODO: enviar email con Resend u otro proveedor
    // const contactEmail = process.env.CONTACT_EMAIL || 'diana.clapes133@gmail.com'
    // await resend.emails.send({
    //   from: 'no-reply@arthemysd.com',
    //   to: contactEmail,
    //   subject: `Nuevo mensaje de ${name}`,
    //   text: `${message}\n\nCorreo: ${email}\nTipo: ${projectType}\nPresupuesto: ${budget}`,
    // })

    console.log('[contact]', { name, email, projectType, message, budget })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('POST /api/contact error', e)
    return NextResponse.json({ error: 'internal' }, { status: 500 })
  }
}
