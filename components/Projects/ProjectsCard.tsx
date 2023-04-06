import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'


type Props = {
    title: string
    desc: string
    url?: any
    gitHub?: any
    img?: any
}

export default function ProjectsCard({title, desc, url, gitHub, img}: Props) {
  return (
    <div className="w-full px-4 h-auto rounded-lg shadow-shadowOne flex flex-col justify-center items-center text-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
        <div className="w-full h-full overflow-hidden rounded-lg md:py-4">
            <Image className="w-full h-60 lg:h-80 object-contain group-hover:scale-110 duration-300 cursor-pointer" 
                src={img} alt="project-image" />
        </div>
        
        <div className="w-full md:mt-5 flex flex-col mx-4 mb-4 gap-6">
            <div>
                <div className="flex flex-col md:flex-row items-center justify-between md:px-4">
                    <h3 className="text-lg md:text-xl uppercase text-designColor font-normal">
                        {title}
                    </h3>
                    <div className="flex gap-2 py-2">
                        <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <Link href={gitHub} target="_blank">
                                <BsGithub />
                            </Link>
                        </span>
                        <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <Link href={`${url}`} target='_blank'>
                                <FaGlobe />
                            </Link>
                        </span>
                    </div>
                </div>
                <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                    {desc}
                </p>
            </div>
        </div>
    </div>
  )
}