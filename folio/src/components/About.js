import React from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const About = () => {

useEffect(()=>{
  AOS.init();
},[])

  return (
      <section className='bg-white w-screen p-12' id='about'>
            <h1 className='text-center text-3xl text-black font-serif italic ' 
            data-aos="fade-right" data-aos-delay="500">About Me</h1>

            <div className=' flex flex-col md:flex-row  space-x-[12%]'>
              <div className=' mx-auto md:mx-0 p-3 border-t-4 border-b-4 w-[320px] border-t-pink-700 border-b-black rounded-[50%]' data-aos="zoom-in" data-aos-delay="500">
                 <Image
                 src='/myphoto.jpg'
                 width={300}
                 height={200}
                 alt='Photo of myself'
                 className='  rounded-[50%]'
                 />
                </div>


                 <div className='py-14 w-screen md:w-[45vw]  text-black space-y-5' data-aos="fade-left" data-aos-delay="500">
                  <h1 className='text-xl text-black text-middle font-serif'>Frontend Developer </h1>
                  <p className='leading-wide'>
                  I am an innovative front-end web and mobile developer motivated to learn, grow, and excel in the Web Industry, with experience and passion for responsive website design and a firm believer in the mobile-first approach. I am a driven student leveraging studies in Web Development seeks real-world experience as a Front-End Developer. I Offer strong interpersonal and task prioritization skills.
                    </p>
               
                    <a href="/FUNMI'S CV.pdf" download>
            <button className='px-4 py-2 rounded-[30px] mt-8 border-2 border-purple-300 bg-gradient-to-t from-black text-white to-pink-600 hover:opacity-80 animate-bounce' >
              Resume
            </button>
          </a>
                 </div>
            </div>

                
      </section>
  )
}

export default About