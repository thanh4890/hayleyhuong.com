import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import {NextUIProvider} from "@nextui-org/react";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  )
}
