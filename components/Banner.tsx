import React from 'react'
import Image from 'next/image'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si"
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
    <section id="home" className='w-full h-[800px] pb-20 flex flex-col md:flex-row border-b-[1px] border-b-designColor font-titleFont'>
        
        {/* LEFT SIDE START*/}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-5">
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


          <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between py-10">
            <div>
              <h2 className="text-base text-designColor uppercase font-titleFont mb-4">
                Find me in
              </h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <FaFacebookF />
                </span>
                <span className="bannerIcon">
                  <FaTwitter />
                </span>
                <span className="bannerIcon">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-base text-designColor uppercase font-titleFont mb-4">
                BEST SKILL ON
              </h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <FaReact />
                </span>
                <span className="bannerIcon">
                  <SiNextdotjs />
                </span>
                <span className="bannerIcon">
                  <SiTailwindcss />
                </span>
                <span className="bannerIcon">
                  <SiFigma />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* LEFT SIDE ENDS*/}


        {/* RIGHT SIDE START*/}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <Image src={banner} alt="banner" className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10" />
          <div  className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"  />
        </div> 
        {/* LEFT SIDE ENDS*/}
    </section>
  )
}