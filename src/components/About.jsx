import React from 'react';
import AboutMe from '../assets/about-me.jpg';

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-column md:flex-row items-center md:space-x-12'>
          <img src={AboutMe} alt="About Me" className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
          <div className='flex-1'>
            <p className='text-lg mb-8'>
            I am Cheah Kah Xuan, a software engineer and web developer specializing in Laravel, web technologies, and mobile development. Currently pursuing a BSc (Hons) in Software Engineering at Asia Pacific University, I have hands-on experience with both web and mobile development frameworks, including Laravel and Drupal for web solutions and Java for mobile applications. With a cumulative GPA of 3.55, I continuously strive to deliver exceptional software solutions across platforms.
            </p>

            <div className='space-y-4'>
              {/* Laravel */}
              <div className='flex items-center'>
                <label htmlFor="laravel" className='w-2/12'>Laravel</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
                </div>
              </div>

              {/* React */}
              <div className='flex items-center'>
                <label htmlFor="react" className='w-2/12'>React</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-5/12'></div>
                </div>
              </div>

              {/* Additional skills */}
              <div className='flex items-center'>
                <label htmlFor="javascript" className='w-2/12'>JavaScript</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                </div>
              </div>

              <div className='flex items-center'>
                <label htmlFor="htmlcss" className='w-2/12'>HTML/CSS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
                </div>
              </div>
            </div>

            <div className='mt-12 flex justify-between text-center'>
              <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>1</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>10</h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>5</h3>
                <p>Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
