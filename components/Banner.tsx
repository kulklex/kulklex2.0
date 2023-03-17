import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import {  BsGit } from 'react-icons/bs'
import {  AiOutlineHtml5 } from 'react-icons/ai'
import {  TbBrandReactNative } from 'react-icons/tb'
import { DiNodejs, DiPython, DiDjango, DiMongodb, DiJava } from 'react-icons/di'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiMysql, SiPostgresql, SiBootstrap, SiSpringboot, SiSpringsecurity, SiFigma, SiNextdotjs, SiTypescript, SiRedux } from "react-icons/si"
import banner from '../public/images/bannerImg.png'

type Props = {}

export default function Banner({}: Props) {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Software Web Developer.",],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  })

  return (
    <section id="home" className='w-full h-full pb-20 flex flex-col md:flex-row border-b-[1px] border-b-designColor font-titleFont'>
        
        {/* LEFT SIDE START*/}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-5  flex-[1]">
            <h4 className="text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Hi, I’m {" "}<span className="capitalize text-designColor"> Hassan Yusuff</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-white">
              a <span>{text}</span>
              <Cursor cursorBlinking={false} cursorStyle="|"  cursorColor="#DCCA87" />
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide">
              I use animation as a third dimension by which to simplify experiences and building through each and every interaction.
              I’m not adding motion just to spruce things up, but doing it ways that.
            </p>
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
                Find me in
              </h2>
              <div className="flex gap-4">
                <span className="bannerIcon bg-blue-400 text-4xl">
                  <Link href="/" ><FaFacebookF /></Link>
                </span>
                <span className="bannerIcon bg-blue-800 text-4xl">
                  <Link href="/" ><FaTwitter /></Link>
                </span>
                <span className="bannerIcon bg-blue-600 text-3xl">
                  <Link href="/" ><FaLinkedinIn /></Link>
                </span>
                <span className="bannerIcon instagramIcon text-4xl">
                  <Link href="/" ><FaInstagram /></Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* LEFT SIDE ENDS*/}


        {/* RIGHT SIDE START*/}
        <div className="w-full md:w-1/2 h-full flex justify-center items-center relative">
          <Image src={banner} alt="banner" className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10" />
          <div  className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"  />
        </div> 
        {/* LEFT SIDE ENDS*/}
    </section>
  )
}