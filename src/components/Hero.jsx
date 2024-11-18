import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover object-top transform transition-transform duration-300 hover:scale-105 top-0 '/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Cheah Kah Xuan</span>
            , Software Engineer 
        </h1>
        <p className='mt-4 text-lg text-gray-300'>I specialize in web application</p>
        <a href="https://www.linkedin.com/in/cheah-kah-xuan/" target="_blank" rel="noopener noreferrer">
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Contact with me
          </button>
        </a>

        <a href="https://your-resume-url.com" target="_blank" rel="noopener noreferrer">
          <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Resume
          </button>
        </a>
    </div>
  )
}

export default Hero