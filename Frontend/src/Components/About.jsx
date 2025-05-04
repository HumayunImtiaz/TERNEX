import React from 'react'
import Navbar from './Navbar'

function About() {
  return (
    <>    <Navbar/>
    <div className=' relative mt-16 px-4 md:h-[60vh] h-[60vh] sm:h-[60vh]  w-[92.7%]  md:w-[97.2%]'>
          <video className= 'absolute rounded-2xl md:h-[50vh] w-full object-cover mt-4 md:mt-0  h-[50vh] sm:h-[50vh] ' 
           autoPlay 
           loop 
           muted 
           playsInline>
          <source className='rounded-l bg-blue-500 mr-20' src="https://cdn.pixabay.com/video/2021/09/11/88225-606079090_tiny.mp4" type="video/mp4" />
        
        </video>
        <div className="absolute top-0 rounded-2xl  mr-12  w-[100%] mt-8 md:mt-0  md:w-[100%] md:h-[50vh]  bg-blue-500 bg-opacity-50"></div>
        <div className='absolute flex flex-col justify-center items-center p-2 md:px-20 md:mt-20 mt-10 ml-4'>
        <h1 className='font-semibold text-4xl pb-2 '>About Us</h1>
        <p className='text-md md:mt-3 md:text-lg '>
            At DigitalVibe, we specialize in high-quality video editing, social media management, and web development to elevate your brand’s digital presence.
            Our expert team transforms raw content into engaging, polished visuals that captivate audiences and drive results.
            </p>
            <p>
                <b>Are You Ready : </b>
                Whether you're looking to enhance your online presence, captivate your audience, or build a strong digital brand, DigitalVive is your go-to partner. 
                Let’s bring your vision to life and take your brand to the next level!
            </p>
        </div>
    
    </div>
    </>

  )
}

export default About