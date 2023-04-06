import React from 'react'
import { navLinksData } from '../constants'
import {Link} from 'react-scroll'
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { FaFacebookF, FaRegEnvelope, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"
import Links from 'next/link'


type Props = {
    showMenu: any
    setShowMenu: any
}

export default function Navbar({showMenu, setShowMenu}: Props) {
    

  return (
    <div className="w-full h-24 static top-0 z-50 app__bg mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-designColor">
        <div>
            <Links href="/" className="text-base md:text-lg font-normal text-white hover:text-designColor tracking-wide cursor-pointer duration-300 flex items-center justify-center">
                <b> My Portfolio</b>
                <span className="mx-2"><FaRegEnvelope /></span>
            </Links>
        </div>
        <div>
            <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
                {navLinksData.map((navLink) => (
                    <li key={navLink._id} className="text-base font-normal text-white hover:text-designColor tracking-wide cursor-pointer duration-300">
                        <Link to={navLink.link} activeClass='active' smooth={true} spy={true} offset={-70} duration={500} >
                            {navLink.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <span onClick={() => setShowMenu(!showMenu)} className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-white cursor-pointer">
                <FiMenu />
            </span>

            {showMenu && (<>
                <div className="w-full h-screen overflow-scroll absolute top-0 left-0 app__bg p-4 scrollbar-hide">
                    <div className='flex flex-col justify-center items-center text-center gap-8 py-2 relative'>
                        <ul className='flex flex-col gap-4 py-4 my-4 mt-[30%]'>
                            {navLinksData.map((navLink) => (
                                <li key={navLink._id} className="text-2xl font-normal text-white hover:text-designColor tracking-wide cursor-pointer duration-300">
                                    <Link to={navLink.link} activeClass='active' smooth={true} spy={true} offset={-70} duration={500}  onClick={() => setShowMenu(false)}>
                                        {navLink.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className=' w-full h-full flex flex-col justify-center items-center gap-4 text-white relative mt-[20%]'>
                            <h2 className="text-base uppercase font-titleFont mb-4">
                                Contact me
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bannerIcon bg-transparent text-4xl">
                                    <Links href="https://github.com/kulklex/" target='_blank'><FaGithub /></Links>
                                </span>
                                <span className="bannerIcon bg-blue-400 text-4xl">
                                    <Links href="https://web.facebook.com/sarz.hassan/?_rdc=1&_rdr" target='_blank' ><FaFacebookF /></Links>
                                </span>
                                <span className="bannerIcon bg-blue-800 text-4xl">
                                    <Links href="https://mobile.twitter.com/_haz_zan_/" target='_blank'><FaTwitter /></Links>
                                </span>
                                <span className="bannerIcon bg-blue-600 text-3xl">
                                    <Links href="https://www.linkedin.com/in/hassan-yusuff-004a60157/" target="_blank"><FaLinkedinIn /></Links>
                                </span>
                                <span className="bannerIcon instagramIcon text-4xl">
                                    <Links href="https://www.instagram.com/_haz_zan_/" target='_blank'><FaInstagram /></Links>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <span onClick={() => setShowMenu(false)} className="absolute top-4 right-4 text-designColor hover:text-white duration-300 text-2xl cursor-pointer">
                    <MdClose />
                </span>
                
            </>)}
        </div>
    </div>
  )
}