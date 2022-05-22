import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className="h-screen overflow-y-scroll bg-slate-200">
        <Header />
      </div>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
