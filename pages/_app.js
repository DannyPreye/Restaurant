import '../styles/globals.css'
import Nav from "./components/Nav"
import Footer from './components/Footer'
import Head from "next/head"
function MyApp({ Component, pageProps }) {
  return <>
    <Nav />
    <Head>
      <title>Restaurant</title>
    </Head>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
