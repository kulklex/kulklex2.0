import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="w-full flex items-center justify-center">
      <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]'>
        @2023 Portfolio.  All Rights reserved
      </p>
    </div>
  )
}