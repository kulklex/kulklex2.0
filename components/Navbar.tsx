import React, { useState } from 'react'
import Image from 'next/image'
import { logo } from '../public'
import { navLinksData } from '../constants'
import {Link} from 'react-scroll'
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"


type Props = {}

export default function Navbar({}: Props) {
    const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className="w-full h-24 static top-0 z-50 app__bg mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-designColor">
        <div>
            <Image src={logo} alt="logo" />
        </div>
        <div>
            <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
                {navLinksData.map((navLink) => (
                    <li key={navLink._id} className="text-base font-normal text-designColor tracking-wide cursor-pointer hover:text-white duration-300">
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
                        {/* <div className="w-full m-2">
                            <Image className='w-32' src={logo} alt="logo" />
                            <br/>
                            <p className='text-s text-designColor mt-2'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Earum soluta perspiciatis molestias enim cum repellat, magnam
                                exercitationem distinctio aliquid nam.
                            </p>
                        </div> */}

                        <ul className='flex flex-col gap-4 py-4 my-4 mt-[30%]'>
                            {navLinksData.map((navLink) => (
                                <li key={navLink._id} className="text-2xl font-normal text-designColor tracking-wide cursor-pointer hover:text-white duration-300">
                                    <Link to={navLink.link} activeClass='active' smooth={true} spy={true} offset={-70} duration={500}  onClick={() => setShowMenu(false)}>
                                        {navLink.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        
                        <div className=' w-full h-full flex flex-col gap-4 text-white relative mt-[20%]'>
                            <h2 className="text-base uppercase font-titleFont mb-4">
                                Find me in
                            </h2>
                            <div className='flex justify-center items-center gap-4'>
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