import React, { useState } from "react"
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


function CounterProject() {

    const [counteron, setCounterOn] = useState(false);
    
  return (
    <>
      
    <ScrollTrigger  onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <div className="h-48 md:w-[100%] mt-16">
    
    <a className="ml-20 cursor-pointer text-green-500" href="stockvideo">Download Free Images /Videos</a>

    <div className="md:h-40 h-32 md:w-[80%] w-[90%] lg: md:ml-20 mt-10 bg-slate-200 dark:bg-slate-900 flex  justify-around items-center rounded-2xl shadow-blue-500">
        
        <div className="border-r-[0.5px] w-[22%]  ">
        <h1 className="font-bold md:text-4xl text-2xl
        text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">
            {counteron &&   <CountUp start={0} end={12} duration={7} /> }
      
        <sup className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">+</sup>
        </h1>
        <h2>Current Projects</h2>
        </div>
        

        <div className="border-r-[0.5px] w-[25%]">
        <h1 className="font-bold md:text-4xl text-2xl
         text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-50% via-primary via-50% to-green-600">
         {counteron &&   <CountUp start={0} end={73} duration={7} /> }
         <sup className=" text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">+</sup>
        </h1>
        <h2>Projects Completed</h2>
        </div>

        <div className=" w-[20%]">
        <h1 className="font-bold md:text-4xl text-2xl
         text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">
             {counteron &&   <CountUp start={0} end={73} duration={7} /> }
        <sup className=" text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">+</sup>
        </h1>
        <h2>Happy Clients</h2>
        
        </div>
        
     
        
        </div>
    
        <span className="w-4/12 lg:w-2/12] aspect-square bg-gradient-to-tr from-primary to-green-400 relative -top-5 
     lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90">

     </span>
      
    </div>
    </ScrollTrigger>
    
     </>
  )
}

export default CounterProject
