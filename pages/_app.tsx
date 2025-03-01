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
   
    {/* Favicon Links */}
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  </Head>
  <Component {...pageProps} />
</>)}

export default MyApp
