import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Projects = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <>
    <section className="w-screen bg-gradient-to-t from-black via-purple-500 to-black  space-y-12 border-t-[1px] p-20 carousel" id="projects">
      <h2 className="text-center text-2xl md:text-4xl font-semibold italic font-serif">My Favorite Projects</h2>
      <Slider {...settings}>
      <div className=" w-screen space-y-6">
        <Image src="/modamartdark.jpg"
        width={600}
        height={500}
        className="mx-auto"
         alt="modamart project" border="0"/>
   <div className="mx-auto space-x-5 flex  justify-center">
   <a href="https://github.com/Debbie-alt/FastApi-Ecommerce" className="text-xs md:text-md">View Repo</a>
         <a href="https://e-commerce-six-neon-12.vercel.app/" className="text-xs md:text-md">View Live Link</a>
   </div>
        

      </div>
      <div className="container space-y-6">
        <Image src="/Forecastify.jpg"
        width={600}
        height={500}
        className="mx-auto"

         alt="modamart project" border="0"/>
          <div className="mx-auto space-x-5 flex  justify-center">
   <a href="https://github.com/Debbie-alt/weather-app" className="text-xs md:text-md">View Repo</a>
         <a href="https://weather-app-eight-bice.vercel.app/" className="text-xs md:text-md">View Live Link</a>
   </div>
      </div>
      <div className="container space-y-6">
        <Image src="/movattis.jpg"
        width={600}
        height={600}
        className="mx-auto"
         alt="modamart project" border="0"/>
          <div className="mx-auto space-x-5 flex  justify-center">
   <a href="https://github.com/Debbie-alt/MovATTI" className="text-xs md:text-md">View Repo</a>
         <a href="https://movatti.vercel.app/" className="text-xs md:text-md">View Live Link</a>
   </div>
      </div>
      {/* <div className="container space-y-6">
        <Image src="/modamartlight.jpg"
        width={600}
        height={600}
        className="mx-auto"

         alt="modamart project" border="0"/>
      </div>
      <div className="container">
        <Image src="/modamartlight.jpg"
        width={600}
        height={600}
        className="mx-auto"
         alt="modamart project" border="0"/>
      </div>
      <div className="container">
        <Image src="/modamartdark.jpg"
        width={600}
        height={600}
        className="mx-auto"

         alt="modamart project" border="0"/>
      </div> */}
    </Slider>

    </section>
    
    </>
  )
};

export default Projects;
