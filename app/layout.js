import { Rubik } from "next/font/google"
import "../styles/globals.css"

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
