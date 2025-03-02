import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return(<> 
  <Head>
    <title>Hassan Yusuff | Software Developer</title>
    <meta name="description" content="Hassan Yusuff’s Portfolio - Software Developer specializing in React, React Native, Next.js, Node.js, Enterprise Java, Spring boot, Computer Vision and Machine Learning." />
    <meta name="keywords" content="Kulklex, Kulklexs, Software Developer, Software Engineer, Full-Stack Developer, Next.js, React, React Native, Nodejs, Java, Javascript, Typescript, Python, Spring, Springboot, AWS, Computer Vision, Machine learning, SQL, NoSQL, Web Development" />
    <meta name="author" content="Hassan Yusuff" />
   
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
