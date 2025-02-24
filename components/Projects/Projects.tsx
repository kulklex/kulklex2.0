import React from 'react'
import Title from '../Title'
import ProjectsCard from './ProjectsCard'
import Slider from 'react-slick' 
import {restaurantUI, videoApp, travelAdvisor, modernUI, pgtwUI, pixabayAPI, realEstateAPI, calcRoute, graphCMSBlog, cryptoAPI, nativeJobsAPI, dataVisualization, budspot, Tifehairhaven} from "../../public"
import {  FaGithub,  } from 'react-icons/fa'
import Link from 'next/link'





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
      style={{ ...style }}
      onClick={onClick}
    />
  )
}

function PrevArrow(props: Props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}


export default function Projects({}: Props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  
    autoplaySpeed: 8000,
  }

  return (
    <section id="projects"  className="w-full px-4 py-20 border-b-[1px] border-b-designColor lg:flex lg:flex-col lg:justify-center lg:items-center lg:text-center">
        <div className="flex justify-center items-center text-center">
            <Title desc="My Projects" />
        </div>


      <div className="flex justify-center item-center text-center p-4 text-white hover:text-designColor"> 
        Navigate to the next project by using the arrow.
      </div>
      
        <Slider {...settings} className="md:px-4 lg:w-[80%] flex justify-center items-center text-center">
          <div>
            <ProjectsCard title="Hair Salon" desc="Developed a fully functional salon booking website, utilizing JavaScript and Bootstrap for the frontend, and a fast Node.js server-side architecture to handle routing, data management, and payment integration. The platform allows users to easily book available time slots for specific dates and secure their reservations with a £15 deposit. Integrated a seamless payment gateway and implemented automated email notifications to confirm bookings. Additionally built an admin panel that enables the salon owner to manage available dates and mark them as unavailable for personal reasons. The entire application was deployed on DigitalOcean with a streamlined CI/CD pipeline to ensure smooth updates and deployment." 
              url={`https://tifehairhaven.co.uk/`} gitHub="https://github.com/kulklex/Salon" img={Tifehairhaven} />
          </div>
          <div>
            <ProjectsCard title="Price Comparison Website" desc="Budspot is a price comparison website designed specifically for earbuds, inspired by PriceRunner, and developed to showcase expertise in Enterprise Java, Multithreading, and the Spring Framework. Users can perform a simple search to view detailed product information, with advanced web scraping implemented via Selenium and Java. The application pulls real-time data from major retailers such as eBay, BackMarket, Argos, John Lewis, and Currys, storing the results securely in an SQL database. For efficient handling of large results, pagination is implemented for searches returning more than 10 products. The backend is powered by a REST API built with Express.js, running seamlessly within the Next.js framework, providing a smooth, full-stack experience with a modern and responsive UI. The data is stored on a DigitalOcean droplet, but may not always be fully up-to-date due to frequent changes on source websites (Websites that were scraped)." 
              url={`https://price-comparison-website.vercel.app/`} gitHub="https://github.com/kulklex/Price-comparison-Website" img={budspot} />
          </div>
          <div>
            <ProjectsCard title="Data Visualisation Website (Machine learning)" desc="This website focuses on the data visualization of football data, including sentiment analysis derived from news data for five football teams, actual match results, and forecasts produced using AWS SageMaker. Note that the AWS bucket access has expired, the link does not work anymore. Check out github code to see implementations. Read project report for further understanding." url={`https://footballdatalandingpagebucket.s3.amazonaws.com/index.html`} gitHub="https://github.com/kulklex/Data-Visualisation-website" img={dataVisualization} />
          </div>
          <div>
            <ProjectsCard title="React Native Jobs API" desc="A cross-platform mobile app that shows available jobs using an external API. Mobile product, check out github link for source code." 
            url={``} gitHub="https://github.com/kulklex/React-Native-Jobs-App" img={nativeJobsAPI} />
          </div>
          <div>
            <ProjectsCard title="Blog using GraphCMS" desc="Testing out GraphQL expertise with this project. A Nextjs complete blog app retrieving data with GraphCMS" url={`https://next-js-blog-with-graph-ql-iz78.vercel.app/`} gitHub="https://github.com/kulklex/NextJsBlog-With-GraphQL" img={graphCMSBlog} />
          </div>
          <div>
            <ProjectsCard title="TRAVEL-ADVISOR-APP" desc="A Travel advisor app that searches for Restaurants, Hotels and Attractions" url={`https://travel-advisor-app-sable.vercel.app/`} gitHub="https://github.com/kulklex/Travel-Advisor-App" img={travelAdvisor} />
          </div>
          <div>
            <ProjectsCard title="Live Crypto Coin Ranking APP" desc="Cryptocurrency web app that fetches and displays different crypto data from an external API. Created for personal use!" url={`https://crypto-coin-ranking-app.vercel.app/`} gitHub="https://github.com/kulklex/Crypto-Coin-Ranking-App" img={cryptoAPI} />
          </div>
          {/* <div>
            <ProjectsCard title="Pixabay API" desc="Displaying Dynamic features with Pixabay API" url={`https://pictures-app-with-pixabayapi-git-pixabay-api-kulklex.vercel.app/`} gitHub="https://github.com/kulklex/React-Pixabay-Api" img={pixabayAPI} />
          </div> */}
          {/* <div>
            <ProjectsCard title="Social-Video-App" desc="A Social Media App that allows you log in with Google and upload videos, you can also watch other accounts videos. Built with Nextjs." url={`https://social-media-video-app.vercel.app/`} gitHub="https://github.com/kulklex/social-media-video-app" img={videoApp} />
          </div> */}
          {/* <div>
            <ProjectsCard title="Real Estate Api" desc="A Nextjs Real-Estate App retrieving data from an external API with search-by-filters functionality" url={`https://nextjs-real-estate-app-tau.vercel.app/`} gitHub="https://github.com/kulklex/Nextjs-Real-Estate-App" img={realEstateAPI} />
          </div> */}
          {/* <div>
            <ProjectsCard title="Calculate Route App" desc="A React App that calculates routes using Google maps API" url={`https://google-maps-api-react.vercel.app/`} gitHub="https://github.com/kulklex/google-maps-api-react" img={calcRoute} />
          </div> */}
{/*           <div>
            <ProjectsCard title="Payment Gateway UI" desc="A complete responsive payment-gateway-lookalike website design only" url={`https://payment-gtw-landingpage-ui.vercel.app/`} gitHub="https://github.com/kulklex/payment-gtw-landingpage-ui" img={pgtwUI} />
          </div>
          <div>
            <ProjectsCard title="Restaurant Landing-Page UI" desc="A complete responsive restaurant website design only" url={`https://restaurant-landingpage-ui-design.vercel.app/`} gitHub="https://github.com/kulklex/restaurant-landing-page-ui" img={restaurantUI} />
          </div>
          <div>
            <ProjectsCard title="Modern UI Landing-Page" desc="A complete responsive modern website design only" url={`https://nextjs-modern-ui-responsive-landing-page.vercel.app/`} gitHub="https://github.com/kulklex/ai-responsive-landing-page-ui" img={modernUI} />
          </div> */}
        </Slider>

         {/* <div className="text-xs flex justify-center item-center text-center p-4 text-white hover:text-designColor"> 
          <p>Click here to access more projects on my GitHub page {"  "}</p>
          <span className="bg-black text-white flex items-center justify-center text-center px-2">
            <Link href="https://github.com/kulklex/" target='_blank'><FaGithub /></Link>
          </span>
        </div> */}
    </section>
  )
}
