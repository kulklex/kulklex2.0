import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return(<> 
  <Head>
    <title>Hassan’s Portfolio</title>
    <meta name="description" content="Hassan Yusuff's Portfolio Website" />
  </Head>
  <Component {...pageProps} />
</>)}

export default MyApp
