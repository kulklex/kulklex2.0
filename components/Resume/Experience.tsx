import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from 'framer-motion'

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div className="w-full px-4 py-12 font-titleFont gap-10 lgl:gap-20"  initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-designColor border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-End Developer (Remote)"
            subTitle="(June 2023 - September 2023)"
            result=""
            desc="Participated as an agile team member in the development of the company's flagship web application, utilizing React, Node.js, Redux, HTML5, CSS3, and Tailwind CSS. Contributed to user-centric interface design, enhancing visual appeal and usability. Rapidly progressed from intern level due to outstanding performance and demonstrated ability to work effectively within the agile team"
          />
          <ResumeCard
            title="Full Stack Junior Developer (Contract)"
            subTitle="DataSek IT & ENGR - (April 2022 - September 2022)"
            result=""
            desc="Created, Built and Designed the entire Dashboard of the product and assisted with the design for the web application. Participated in the development of RESTFUL services, API integration, Payment Gateway Integration, Database management, Authentication and Authorization implementations and other technical back-end aspect ofthe product.   Performed unit tests and automated tests for each components of the software.    Assisted with Deployment and maintenance of Software on the Cloud.   Worked as a team-member led by a team-lead."
          />
          <ResumeCard
            title="Web Development (Internship)"
            subTitle="Aptech (January 2021 - May 2021)"
            result=""
            desc="Participated in the development of Website Projects and hosted them.   Taught Vanilla JavaScript, Bootstrap & Jquery, Nodejs and Python, Basics to Software Engineering Beginners.   Learnt some Web technologies (Tailwind, C++, Angular 11).   Assisted in troubleshooting web-based issues."
          />
        </div>
    </motion.div>
  )
}
