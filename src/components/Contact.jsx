// import React from 'react'
// import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//         // const form = useRef();

//         // const sendEmail = (e) => {
//         // e.preventDefault();
    
//         // emailjs.sendForm('your_service_id', 'your_template_id', form.current, 'your_user_id')
//         //     .then((result) => {
//         //         console.log(result.text);
//         //         alert("Message Sent Successfully!");
//         //     }, (error) => {
//         //         console.log(error.text);
//         //         alert("Failed to send message, try again.");
//         //     });
    
//         //     e.target.reset(); // Clear the form
//         // };
//   return (
//     <div className="bg-black text-white py-20" id='about'>
//         <div className="container mx-auto px-8 md:px-16 lg:px-24">
//             <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
//             <div className="flex flex-col md:flex-row items-center md:space-x-12">
//                 <div className='flex-1'>
//                     <h3 className='text-bold'>Let's Talk</h3>
//                     <p>I'm Opening to discuss web development projects</p>
//                     <div className='mb-4 mt-8'>
//                         <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
//                         <a href="mailto:cheahkahxuan@gmail.com" className='hover:underline'>cheahkahxuan@gmail.com</a>

//                     </div>
//                     <div className='mb-4 mt-8'>
//                         <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
//                         <a href="mailto:cheahkahxuan@gmail.com" className='hover:underline'><span>+60139339189</span></a>

//                     </div>
//                     <div className='mb-4 mt-8'>
//                         <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
//                         <a href="mailto:cheahkahxuan@gmail.com" className='hover:underline'><span>Kuala Lumpur</span></a>

//                     </div>
//                 </div>
//                 <div className='flex-1 w-full'>
//                     <form className='space-y-4'>
//                     <div>
//                         <label htmlFor="name" className='block mb-2'>Your Name</label>
//                         <input type="text" 
//                         className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                         focus:border-green-400'
//                         placeholder='Enter You Name'/>
//                     </div>
//                     <div>
//                         <label htmlFor="emial" className='block mb-2'>Email</label>
//                         <input type="text" 
//                         className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                         focus:border-green-400'
//                         placeholder='Enter You Email'/>
//                     </div>
//                     <div>
//                         <label htmlFor="message" className='block mb-2'>Message</label>
//                         <textarea type="text" 
//                         className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                         focus:border-green-400'
//                         rows="5"
//                         placeholder='Enter You Message'/>
//                     </div>
//                     <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//                 transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
//                 </form>

//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Contact