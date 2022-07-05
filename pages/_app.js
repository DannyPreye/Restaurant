import '../styles/globals.css'
import Nav from "./components/Nav"

import Head from "next/head"
function MyApp({ Component, pageProps }) {
  return <>
    <Nav />
    <Head>
      <title>Restaurant</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
