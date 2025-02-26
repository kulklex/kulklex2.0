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
            title="Freelancer"
            subTitle="Multiple clients - (September 2022 - Present)"
            desc="For almost 3 years, I’ve been freelancing, collaborating directly with clients to build custom solutions that address real-world problems. My work ranges from crafting new products from the ground up to jumping in as a contributor to refine and expand on existing platforms. Whether it's streamlining processes, enhancing features, or solving complex technical challenges, my goal is always to help clients improve their product experience and achieve their objectives efficiently."
          />
          <ResumeCard
            title="Software Developer"
            subTitle="Resavation - (November 2022 - December 2024)"
            desc="Participated as an agile team member in the development of the company's flagship web application, utilizing React, Node.js, Redux, HTML5, CSS3, and Tailwind CSS. My contributions added to the team’s achievement of 1000 early subscribers within its first 3 months of launch.
                  · Contributed greatly to user-centric interface design, enhancing visual appeal and usability. This front-end and user experience techniques helped improve the website’s visitor retention rate by over 15%.
                  · Rapidly promoted from junior level to mid-level within the first 2 months of joining the team, due to outstanding performance and demonstrated ability to work effectively within the agile team."
          />
          <ResumeCard
            title="Java & Full Stack Junior Developer"
            subTitle="DataSek IT & ENGR - (June 2020 - September 2022)"
            desc="Collaborated with developers and designers remotely to transform different admin dashboard wireframes into a dynamic and responsive web application using HTML5, CSS3, JavaScript, Bootstrap, and React.
                · Integrated front-end components seamlessly with existing backend systems, involving technologies such as Node.js, Express.js, MySQL, and RESTful APIs for real-time data exchange and updates, and this was done using over 4000 datasets.
                · Developed and maintained services using Spring Boot, focusing on creating robust, scalable microservice architectures. I applied best practices in Spring Security for authentication and authorization, alongside Spring Data JPA for efficient database operations. The website has not experienced any form of breach till date"
          />
          <ResumeCard
            title="Responsive Web Developer Intern"
            subTitle="Aptech (January 2020 - June 2020)"
            desc="Delivered comprehensive software engineering lectures on core topics, including front-end development (Angular, JavaScript) and backend development (NodeJS, Express JS), to a cumulative total of over 50 Aptech students, over a 6-month period.
                · Organized and conducted tech lab sessions to facilitate hands-on learning and application of technological concepts in software development. These sessions record a 100% learning success rate."
          />
        </div>
    </motion.div>
  )
}
