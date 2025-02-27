import React from "react"
import banner from '../../public/banner.jpeg'

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 w-full '>
        <div className="w-full md:w-1/2 mt-12 md:mt-24 order-2 md:order-1">
        <div className="space-y-12 ">
        <h1 className="text-4xl font-bold">
        Navigating Your Strategic {" "}
        <div className="mt-5"> 
        <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">Digital Success</span>
        </div>
        
        </h1>
        <p className="text-lg">
        DigitalVibe delivers top-notch video editing, social media management, and web development services. 
        We create impactful digital content and seamless online experiences. Transform your brand’s digital presence with us.
        </p>
        <label className="input input-bordered flex items-center gap-2 md:w-[70%] w-[65%] ">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path
            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" className="grow" placeholder="Email" />
        <button className="btn  text-white  md:ml-44 ml-11 
        bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600 ">
            Secondary
        
        </button>
    
        </label>
       
            
        </div>

        </div>
             

        <span className="order-1 w-[60%] md:w-1/2 mt-12 md:mt-32 md:ml-6
        lg:w-2/12 aspect-square bg-gradient-to-tr from-primary to-green-400 absolute
         -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-1 rotate-90">

        </span>
        <div className=" order-1 w-full md:w-1/2 mt-12 md:mt-32 md:ml-6
        ">
          
        <img src={banner} className="w-85 h-85 rounded-xl  animate-pulse delay-100 " alt="" />
        </div>
        
    </div>
   
    </>
  )
}

export default Banner
