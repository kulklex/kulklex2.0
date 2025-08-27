import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"
import { contactImg } from '../../public'
import Image from 'next/image'
import Link from 'next/link'


type Props = {}

export default function ContactCard({}: Props) {
  return (
    <div className="w-full md:w-[40%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lg:p-8 my-10 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <Image src={contactImg} priority alt="contact-image" className="w-full h-auto mb-2 rounded-lg object-cover" />

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">
          Hassan Yusuff
        </h3>
        <p className="text-lg font-normal text-designColor">Software Developer</p>
{/*         <p className="text-base text-white flex items-center gap-2">Phone: <span className="text-lightText">+44 07498936758</span></p> */}
        <p className="text-base text-white flex items-center gap-2">Email: <span className="text-lightText">hassanyusuff670@gmail.com</span></p>
      </div>

      <div className="mt-5">
          <div className="flex flex-wrap gap-4">
            <span className="bannerIcon bg-transparent text-2xl md:text-4xl">
              <Link href="https://github.com/kulklex/" target='_blank'><FaGithub /></Link>
            </span>
            <span className="bannerIcon bg-blue-400 text-2xl md:text-4xl">
              <Link href="https://web.facebook.com/sarz.hassan/?_rdc=1&_rdr" target='_blank'><FaFacebookF /></Link>
            </span>
{/*             <span className="bannerIcon bg-blue-800 text-2xl md:text-4xl">
              <Link href="https://mobile.twitter.com/_haz_zan_/" target='_blank'><FaTwitter /></Link>
            </span> */}
            <span className="bannerIcon bg-blue-600 text-2xl md:text-3xl">
              <Link href="https://www.linkedin.com/in/hassan-yusuff-37103b320?trk=contact-info" ><FaLinkedinIn /></Link>
            </span>
            <span className="bannerIcon instagramIcon text-2xl md:text-4xl">
              <Link href="https://www.instagram.com/kulklexs?igsh=NmZpdmMydm14eGpu&utm_source=qr" target="_blank"><FaInstagram /></Link>
            </span>
          </div>
        </div>
    </div>
  )
}
