import SaleRibbon from "@/components/layout/sale-ribbon"

import Footer from "../components/layout/footer"
import Header from "../components/layout/header"
import "./globals.css"

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <SaleRibbon />
        <Header />
        {children}

        {/* TODO : Need to be formated the code and make reuseable components */}
        <Footer />
      </body>
    </html>
  )
}
