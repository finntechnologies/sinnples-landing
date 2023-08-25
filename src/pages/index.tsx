import Head from 'next/head'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Hero } from '../components/Hero'

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
      <Hero />
      <Main />
      <Footer />
    </>
  )
}
