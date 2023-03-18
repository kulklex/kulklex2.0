import React from 'react'
import Title from '../Title'
import ProjectsCard from './ProjectsCard'
import Slider from 'react-slick' 


type Props = {
  className?: any
  style?: any
  onClick?: any
}


function NextArrow(props: Props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  )
}

function PrevArrow(props: Props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  )
}


export default function Projects({}: Props) {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,  
  }

  return (
    <section id="projects"  className="w-full px-4 py-20 border-b-[1px] border-b-designColor">
        <div className="flex justify-center items-center text-center">
            <Title title="HERE I SHOW OFF SOME OF THE PROJECTS I HAVE WORKED ON" desc="My Projects" />
        </div>

        <Slider {...settings} className="md:px-4">
          <div>
            <ProjectsCard title="Payment Gateway UI" desc="A payment-gateway landing-page-website's complete UI with responsiveness" url={`https://payment-gtw-landingpage-ui.vercel.app`} gitHub="https://github.com/kulklex/payment-gtw-landingpage-ui" />
          </div>
          <div>
            <ProjectsCard title="Payment Gateway UI" desc="A payment-gateway landing-page-website's complete UI with responsiveness" url={`https://payment-gtw-landingpage-ui.vercel.app`} gitHub="https://github.com/kulklex/payment-gtw-landingpage-ui" />
          </div>
          <div>
            <ProjectsCard title="Payment Gateway UI" desc="A payment-gateway landing-page-website's complete UI with responsiveness" url={`https://payment-gtw-landingpage-ui.vercel.app`} gitHub="https://github.com/kulklex/payment-gtw-landingpage-ui" />
          </div>
          <div>
            <ProjectsCard title="Payment Gateway UI" desc="A payment-gateway landing-page-website's complete UI with responsiveness last" url={`https://payment-gtw-landingpage-ui.vercel.app`} gitHub="https://github.com/kulklex/payment-gtw-landingpage-ui" />
          </div>
        </Slider>
    </section>
  )
}