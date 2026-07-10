import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import "slot-text/style.css";
import "@blossom-carousel/react/style.css";
import { Toaster } from "@/components/ui/toaster";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARTHEMYS_D — Ilustración Digital & Animación",
  description:
    "Portafolio de Diana Hernández (ARTHEMYS_D). Ilustradora digital y animadora freelance. Animación 2D frame x frame, fondos de animación, iconos, ilustración de mascotas y diseño de personajes con estética punk.",
  keywords: [
    "ARTHEMYS_D",
    "ArthemysD",
    "Diana Hernández",
    "ilustración digital",
    "animación 2D",
    "anime",
    "Koeda Animation",
    "portafolio artista",
    "diseño de personajes",
    "fondos de animación",
  ],
  authors: [{ name: "Diana Hernández (ARTHEMYS_D)" }],
  openGraph: {
    title: "ARTHEMYS_D — Ilustración Digital & Animación",
    description:
      "Portafolio punk-cósmico de Diana Hernández. Animación, fondos, iconos e ilustración digital.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARTHEMYS_D — Portafolio",
    description: "Ilustración digital y animación con estética punk-cósmica.",
  },
  icons: [
    {
      rel: "icon",
      url: "/gallery/arthemys_d-tengen-toppan-purren-laggan.webp",
      type: "image/webp",
    },
    {
      rel: "shortcut icon",
      url: "/gallery/arthemys_d-tengen-toppan-purren-laggan.webp",
      type: "image/webp",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${archivoBlack.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
