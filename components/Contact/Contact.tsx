import React, {useState} from 'react'
import Title from '../Title'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'


type Props = {}

export default function Contact({}: Props) {


  return (
    <section id="contact"  className="w-full py-20 border-b-[1px] border-b-designColor">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" desc="Contact Me" />
      </div>

      <div className="w-full">
        <div className="w-full h-auto flex flex-col md:flex-row justify-between" >
          <ContactCard />

          <ContactForm />
        </div>
      </div>
    </section>
  )
}