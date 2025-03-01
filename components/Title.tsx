import React, { ReactNode } from 'react'

interface Props {
    title?: string
    desc?: string
    content?: ReactNode
}

const Title = ({title, desc, content} : Props) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
       {title}
      </h3>
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide hover:text-white">
       {content}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{desc}</h1>
    </div>
  );
}

export default Title
