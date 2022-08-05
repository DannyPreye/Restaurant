import '../styles/globals.css'
import Nav from "../components/Nav"
import Footer from '../components/Footer'
import Head from "next/head"

import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return <AnimatePresence>
    <div className='w-screen overflow-x-hidden'>
      <Nav />
      <Head>
        <title>Restaurant</title>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </div>
  </AnimatePresence>
}

export default MyApp
