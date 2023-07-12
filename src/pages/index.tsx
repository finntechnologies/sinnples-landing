import Head from 'next/head'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sinnples - Your home reform app</title>
        <meta
          name="description"
          content="Sinnples, the app for your home reform service indication"
        />
      </Head>
      <Header />
      <Footer />
    </>
  )
}
