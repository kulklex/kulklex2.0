import React from 'react'
import Title from '../Title'
import Card from './Card'
import {MdOutlineScreenshotMonitor, MdEventNote} from 'react-icons/md'
import { FaMobile, FaGlobe } from "react-icons/fa"
import {  CgWebsite } from 'react-icons/cg'

type Props = {}

export default function Features({}: Props) {
  return (
    <section id="services" className='w-full flex flex-col justify-center items-center text-center h-full pb-20 py-10 border-b-[1px] border-b-designColor'>
      <Title title="my areas of specialty" desc="SERVICES" />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6 xl:gap-20 my-4 px-2 py-4">
        <Card
          title="Responsive Websites"
          icon={<CgWebsite />}
        />
        <Card
          title="Frontend Development"
          
          icon={<MdOutlineScreenshotMonitor />}
        />
        <Card
          title="Backend Development"
          
          
        />
        <Card
          title="Mobile Development"
          icon={<FaMobile />}
        />
        <Card
          title="Project Management"
         icon={<MdEventNote />}
        />
      </div>
    </section>
  )
}
