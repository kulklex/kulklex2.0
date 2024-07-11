import React, {useState} from 'react'
import Title from '../Title'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'

type Props = {}

export default function Resume({}: Props) {
  const [educationData, setEducationData] = useState<boolean>(false)  
  const [skillData, setSkillData] = useState<boolean>(false)
  const [experienceData, setExperienceData] = useState<boolean>(true)


  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-designColor">
      <div className='flex justify-center items-center text-center'>
        <Title title='' desc='My Resume' />
      </div>

      <div>
        <ul className="w-full grid grid-cols-3">
          <li className={`resumeLi ${experienceData ? 'border-designColor rounded-lg' : 'border-transparent'}`} onClick={() => {setEducationData(false); setSkillData(false); setExperienceData(true)}}>
            Experience
          </li>
          <li className={`resumeLi ${educationData ? 'border-designColor rounded-lg' : 'border-transparent'}`} onClick={() => {setEducationData(true); setSkillData(false); setExperienceData(false)}}>
            Education
          </li>
          <li className={`resumeLi ${skillData ? 'border-designColor rounded-lg' : 'border-transparent'}`} onClick={() => {setEducationData(false); setSkillData(true); setExperienceData(false)}}>
            Skills
          </li>
        </ul>
        
      </div>

      {experienceData && <Experience />}
      {educationData && <Education />}
      {skillData && <Skills />}
    </section>
  )
}
