import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import Lottie from 'lottie-react';
import animationData from '../../public/Animation.json'; 
import { MdCancel } from "react-icons/md";
import Link from 'next/link';


const Hero = () => {
  const [showLinks, setShowLinks] = useState('hidden');

  const toggleLinks = () => {
showLinks == 'hidden' ?  setShowLinks('flex') :setShowLinks('hidden')
;
  };

  return (
    <header className='p-8 h-screen font-serif'>
      <nav className='flex justify-between'>
        <p className='text-2xl font-sans'>Fayemi Funmilayo</p>
        <section className={` navlinks flex-col md:flex md:flex-row
         py-5 md:py-0 items-center justify-evenly  w-screen md:w-[40vw] font-sans ${showLinks}`}>
        <MdCancel className='md:hidden  text-xl absolute top-[8%] right-[3%]'  onClick={()=> setShowLinks('hidden')}/>
          <Link  className='cursor-pointer'>Home</Link>
          <Link href='#about' className='cursor-pointer'>About</Link>
          <Link href='#projects' className='cursor-pointer'>Skills</Link>
          <Link href='#projects' className='cursor-pointer'>Projects</Link>
          <Link href='#contact' className='border-[1px] border-pink-800 px-3 py-1 rounded-full hover:opacity-70' role='button'>Hire Me</Link>
        </section>
        <CiMenuKebab className='text-2xl md:hidden cursor-pointer' onClick={toggleLinks} role="button"/>
      </nav>
      <section className='mt-[20vh] flex justify-between w-[88vw]'>
        <div className='space-y-5'>
          <h1 className='text-xl font-semibold'>Hi There!,</h1>
          <h1 className='text-6xl font-bold'>I am <span className="bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 text-transparent animate-pulse">Funmi,</span></h1>
          <div>
            <h1 className='text-sm md:text-md'>Frontend Developer and Software Engineer</h1>
            <p className=' text-xs xs:text-sm md:text-[16px] mt-2 leading-6'>  I specialize in crafting user-friendly interfaces and building robust software solutions. With a passion for clean code and innovative design, I strive to create seamless digital experiences that delight users. 
</p>
          </div>
          <a  href="#about" role='button' className=' w-[40px] border-[1px] animate-bounce rounded-full p-2 text-xl flex items-center bg-gradient-to-b from-black to-pink-700 mt-5'><FaAngleDown className='' /></a>
        </div>
        <div>
          <Lottie
            animationData={animationData}
            className="w-[40vw] h-[60vh] hidden md:flex "
            loop={true}
          />
        </div>
      </section>
    </header>
  );
};

export default Hero;
