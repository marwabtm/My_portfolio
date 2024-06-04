import Navbar from "@/components/Navbar"
import "@/styles/globals.css"
import { Montserrat } from "next/font/google"
import { Roboto_Mono } from "next/font/google"
import FooterPrincipal from "../components/FooterPrincipal"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </header>
      <main className={` ${roboto_mono.variable} ${montserrat.variable} bg-light dark:bg-dark w-full min-h-screen`}>
        <Navbar />
        <Component {...pageProps} />
        <FooterPrincipal />
      </main>
    </>

  )
}
