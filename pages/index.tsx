import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Features from '../components/Features/Features'
import Projects from '../components/Projects/Projects'
import Resume from '../components/Resume/Resume'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Footer from '../components/Footer/Footer'
import FooterBottom from '../components/Footer/FooterBottom'

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
