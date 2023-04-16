import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from 'framer-motion'

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div className="w-full px-4 py-12 font-titleFont gap-10 lgl:gap-20"  initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Date</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-designColor border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Junior Developer (Contract)"
            subTitle="DataSek IT & ENGR - (March 2022 - September 2022)"
            result="Ogba, Lagos State, Nigeria"
            desc="Created, Built and Designed the entire Dashboard of the product and assisted with the design for the web application. Participated in the development of RESTFUL services, API integration, Payment Gateway Integration, Database management, Authentication and Authorization implementations and other technical back-end aspect ofthe product.   Performed unit tests and automated tests for each components of the software.    Assisted with Deployment and maintenance of Software on the Cloud.   Worked as a team-member led by a team-lead."
          />
          <ResumeCard
            title="Freelancer"
            subTitle="(June 2022 - Present)"
            result="Nigeria"
            desc="Developed Software solutions (Web and Mobile apps) for clients.    Updated and modified existing software on the hosted server for clients.    Full management of software products."
          />
          <ResumeCard
            title="Web Development (Internship)"
            subTitle="Aptech (September 2021 - March 2022)"
            result="Alagbole, Ogun State, Nigeria"
            desc="Participated in the development of Website Projects and hosted them.   Taught Vanilla JavaScript, Bootstrap & Jquery, Nodejs and Python, Basics to Software Engineering Beginners.   Learnt some Web technologies (Tailwind, C++, Angular 11).   Assisted in troubleshooting web-based issues."
          />
        </div>
    </motion.div>
  )
}