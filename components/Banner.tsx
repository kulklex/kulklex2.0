import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import {  BsGit } from 'react-icons/bs'
import {  AiOutlineHtml5 } from 'react-icons/ai'
import {  TbBrandReactNative } from 'react-icons/tb'
import { DiNodejs, DiPython, DiDjango, DiMongodb, DiJava } from 'react-icons/di'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiMysql, SiPostgresql, SiBootstrap, SiSpringboot, SiSpringsecurity, SiFigma, SiNextdotjs, SiTypescript, SiRedux } from "react-icons/si"
import {profilePic} from '../public'

type Props = {
  showMenu: any
}

export default function Banner({showMenu}: Props) {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Software Developer.", "MERN Stack Developer",],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  })

  return (
    <section id="home" className='w-full h-full pb-20 pt-10 flex flex-col border-b-[1px] border-b-designColor font-titleFont'>
      <div className='w-full h-full flex flex-col md:flex-row'>
        {/* LEFT SIDE START*/}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-5  flex-[1]">
            <h4 className="text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Hi, I’m {" "}<span className="capitalize text-designColor"> Hassan Yusuff</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-white">
              a <span>{text}</span>
              { !showMenu && <Cursor cursorBlinking={false} cursorStyle="|"  cursorColor="#DCCA87" />}
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide lg:pt-10 lg:text-xl">
              An enthusiast of software development. Being an enthusiast lead to my exploration of the field, I always consider myself a ‘forever student’ eager to build projects and stay in tune with the latest IT trends.
              My work is related to digital solutions that can help to achieve better results. Scroll through my portfolio for more about me.
            </p>
          </div>
        </div>
        {/* LEFT SIDE ENDS*/}

        {/* RIGHT SIDE START*/}
        <div className={`w-full md:w-1/2 h-full flex justify-center items-center relative overflow-hidden px-2 md:py-0 ${showMenu ? "py-40" : "py-10"}`}>
          <Image src={profilePic} alt="banner" className="w-[350px] h-[400px] lg:w-[450px] lg:h-[550px] z-10 rounded" />
        </div> 
        {/* LEFT SIDE ENDS*/}
      </div>  

      

      <div className="flex flex-col flex-[1] gap-6  justify-between py-10">
        <div>
          <h2 className="text-base text-designColor uppercase font-titleFont mb-4">
            TECHNOLOGIES
          </h2>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <span className="bannerIcon text-extrabold text-4xl text-blue-300">
              <FaReact />
            </span>
            <span className="bannerIcon text-extrabold text-4xl text-green-300">
              <DiNodejs />
            </span>
            <span className="bannerIcon text-extrabold text-4xl text-green-800">
              <DiMongodb />
            </span>
            <span className="bannerIcon text-extrabold text-4xl">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon text-extrabold text-4xl text-blue-600">
              <SiTypescript />
            </span>
            <span className="bannerIcon text-extrabold text-4xl text-purple-500">
              <SiRedux />
            </span>
            <span className="bannerIcon text-extrabold text-4xl text-blue-400">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon text-extrabold text-4xl text-purple-700">
              <SiBootstrap />
            </span>
            <span className="bannerIcon text-extrabold text-4xl text-orange-800">
              <BsGit />
            </span>
            <span className="bannerIcon  text-extrabold text-4xl text-orange-700">
              <DiJava />
            </span>
            <span className="bannerIcon text-extrabold text-4xl text-green-600">
              <SiSpringboot />
            </span>
            <span className="bannerIcon text-extrabold text-4xl text-green-800">
              <SiSpringsecurity />
            </span>
            <span className="bannerIcon text-extrabold text-4xl text-white">
              <DiPython />
            </span>
            <span className="bannerIcon  text-extrabold text-4xl text-white">
              <DiDjango />
            </span>
            <span className="bannerIcon  text-extrabold text-4xl text-blue-200">
              <SiMysql />
            </span>
            <span className="bannerIcon  text-extrabold text-4xl text-blue-800">
              <SiPostgresql />
            </span>
            <span className="bannerIcon text-extrabold text-4xl text-blue-800">
              <TbBrandReactNative />
            </span>
            <span className="bannerIcon text-extrabold text-4xl text-orange-500">
              <AiOutlineHtml5 />
            </span>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-base text-designColor uppercase font-titleFont mb-4">
            Contact me
          </h2>
          <div className="flex flex-wrap gap-4">
            <span className="bannerIcon bg-transparent text-2xl md:text-4xl">
              <Link href="https://github.com/kulklex/" target='_blank'><FaGithub /></Link>
            </span>
            <span className="bannerIcon bg-blue-400 text-2xl md:text-4xl">
              <Link href="https://web.facebook.com/sarz.hassan/?_rdc=1&_rdr" target='_blank'><FaFacebookF /></Link>
            </span>
            <span className="bannerIcon bg-blue-800 text-2xl md:text-4xl">
              <Link href="https://mobile.twitter.com/_haz_zan_/" target='_blank'><FaTwitter /></Link>
            </span>
            <span className="bannerIcon bg-blue-600 text-2xl md:text-3xl">
              <Link href="https://www.linkedin.com/in/hassan-yusuff-004a60157/" target='_blank'><FaLinkedinIn /></Link>
            </span>
            <span className="bannerIcon instagramIcon text-2xl md:text-4xl">
              <Link href="https://www.instagram.com/_haz_zan_/" target='_blank'><FaInstagram /></Link>
            </span>
          </div>
        </div>
      </div>  
    </section>
  )
}