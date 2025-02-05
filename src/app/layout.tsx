import type { Metadata } from "next"
import { inter } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "SLSYWC'25",
  description:
    "IEEE SL SECTION STUDENTS | YP | WIE CONGRESS IN COLLABORATION WITH CS SYP GLOBAL CONGRESS",
  icons: {
    icon: ["/2025/logo-ico.png"]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
