import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FooterBottom from '../components/FooterBottom'

const Home: NextPage = () => {
  return (
    <div className="w-full h-auto app__bg text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto py-4">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  )
}

export default Home
