import React from "react"

export default function RegisterPageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen bg-primary-background bg-[url('/assets/bg-form.jpg')] bg-cover">{children}</div>
}
