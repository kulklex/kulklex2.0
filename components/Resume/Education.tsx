import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from 'framer-motion'


type Props = {}

export default function Education({}: Props) {
  return (
    <motion.div className="w-full px-4 font-titleFont gap-10 lgl:gap-20"  initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-designColor border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bsc (Hons) Information Technology"
            subTitle="Middlesex University (2024)"
            result="(ongoing)"
            desc="The Burroughs, Hendon, London, United Kingdom"
          />
          <ResumeCard
            title="Advanced Diploma In Software Engineering"
            subTitle="Aptech Computer Education (2022)"
            result="Distinction"
            desc="Aagbole, Ogun, Nigeria"
          />
          <ResumeCard
            title="Senior Secondary School Certificate"
            subTitle="Government Senior Model College Owutu (2017)"
            result="Excellent"
            desc="Ikorodu, Lagos, Nigeria"
          />
        </div>
    </motion.div>
  )
}
