import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "Afrizal Syahruluddin Yusuf - Portfolio",
  description:
    "Portfolio website untuk Afrizal Syahruluddin Yusuf, seorang Informatics Graduate, Videographer, dan Photographer.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
