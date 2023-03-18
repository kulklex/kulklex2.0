import React from 'react'
import Title from '../Title'
import Card from './Card'
import {MdOutlineScreenshotMonitor} from 'react-icons/md'
import { AiFillAppstore } from "react-icons/ai"
import { FaMobile, FaGlobe } from "react-icons/fa"
import { SiProgress, } from "react-icons/si"

type Props = {}

export default function Features({}: Props) {
  return (
    <section id="features" className='w-full flex flex-col h-full pb-20 py-10 border-b-[1px] border-b-designColor'>
      <Title title="Features" desc="What I Do" />
      <div className="w-full h-full grid grid-cols-1  xl:grid-cols-3 gap-6 xl:gap-20 my-4 px-2 py-4">
        <Card
          title="Frontend Development"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<MdOutlineScreenshotMonitor />}
        />
        <Card
          title="Backend Development"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Web Hosting"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        />
        <Card
          title="SEO Optimisation"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        />
      </div>
    </section>
  )
}