import React from 'react'

type Props = {
    title?: string
    subTitle?: string
    result?: any
    desc?: string
}

export default function ResumeCard({title, subTitle, result, desc}: Props) {
  return (<div>
    <div className="w-10 bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-gray-600 inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
    </div>

    <div className="w-full bg-gray-600 bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold group-hover:text-white text-designColor duration-300">
              {title}
            </h3>
            <p className="md:text-base lg:text-xl text-extrabold mt-2 text-white group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {desc}
        </p>
  </div>
    
</div>)
}