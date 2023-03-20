import React from 'react'
import Title from '../Title'
import Card from './Card'
import {MdOutlineScreenshotMonitor, MdEventNote} from 'react-icons/md'
import { FaMobile, FaGlobe } from "react-icons/fa"

type Props = {}

export default function Features({}: Props) {
  return (
    <section id="services" className='w-full flex flex-col justify-center items-center text-center h-full pb-20 py-10 border-b-[1px] border-b-designColor'>
      <Title title="my areas of specialty" desc="SERVICES I OFFER" />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6 xl:gap-20 my-4 px-2 py-4">
        <Card
          title="Frontend Development"
          desc="I create & design responsive and dynamic websites. Some of the technologies i make use of includes: HTML, CSS, React, NextJs, Tailwindcss, Bootstrap, Material UI, Styled Component."
          icon={<MdOutlineScreenshotMonitor />}
        />
        <Card
          title="Backend Development"
          desc="It has to do with improving your site/app by adding server side logic/features to it, creating user login, storing data on the database etc to create seamless and functional experience for the users. I make use of Nodejs & Expressjs, django, spring & spring boot for this service."
          
        />
        <Card
          title="Mobile Development"
          desc="I create & design responsive and dynamic software applications that run on a mobile device, I make use of React Native and Kotlin for this service."
          icon={<FaMobile />}
        />
        <Card
          title="Project Management"
          desc="Planning and Organizing tasks/events using softwares. I make use of Jira for this service."
          icon={<MdEventNote />}
        />
        <Card
          title="Other Services"
          desc="This includes Web Hosting, SEO Optimization  "
          icon={<FaGlobe />}
        />
      </div>
    </section>
  )
}