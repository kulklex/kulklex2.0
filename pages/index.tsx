import type { NextPage } from 'next'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Features from '../components/Features/Features'
import Projects from '../components/Projects/Projects'
import Resume from '../components/Resume/Resume'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'


const Home: NextPage = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <div className="w-full h-auto app__bg text-lightText px-4 lg:px-8 overflow-hidden">
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="max-w-screen-xl mx-auto py-4">
        <Banner showMenu={showMenu} />
        <Features />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
