import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "../styles/globals.css"

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-[#282d2d]`}>{children}</body>
    </html>
  )
}
