import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


const Contact = () => {
      useEffect(()=>{
            AOS.init();
          },[])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSuccessToastVisible, setIsSuccessToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const displayMessage = (e) => {
    e.preventDefault();
    setIsSuccessToastVisible(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setTimeout(() => {
      setIsSuccessToastVisible(false);
    }, 3000); 
  };

  return (
    <section className=' p-4 md:p-20 bg-black space-y-7' id="contact">
      <h1 className='font-serif text-3xl text-center text-transparent bg-clip-text bg-gradient-to-tr from-indigo-300 to-pink-600'  data-aos="fade-right" data-aos-delay="0"
>Contact Me</h1>
      <p className='text-sm text-center leading-6 w-[60vw] mx-auto text-gray-300'>I am open to collaborations, learning, and job opportunities. Kindly contact me if you have any. Or is there anything you would like to discuss with me? No worries, I am friendly and approachable</p>

      <div className='flex justify-center text-black font-serif' data-aos="zoom-in" data-aos-delay="300">
        <form className="w-[90vw] md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white p-8 rounded-lg shadow-lg shadow-pink-400" onSubmit={displayMessage}>
          <h2 className="text-3xl text-center mb-4 italic">Reach Out</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
            <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-pink-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-pink-600" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-pink-600"></textarea>
          </div>
          <div className="flex justify-center">
            <button required type="submit" className="bg-gradient-to-tr from-black to-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg focus:outline-none">Send Message</button>
          </div>
        </form>
      </div>

      {isSuccessToastVisible && (
        <div className="fixed top-0 right-0 mt-10 mr-10 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Message sent successfully!
        </div>
      )}
    </section>
  )
}

export default Contact;
