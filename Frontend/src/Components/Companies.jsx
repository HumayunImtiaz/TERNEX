import React from "react"
import slack from '../../public/slack.jpeg'
import company0 from '../../public/company0.png'
import company2 from '../../public/company2.png'
import company3 from '../../public/company3.png'
import company5 from '../../public/company5.png'
import company6 from '../../public/company6.png'
import company7 from '../../public/company7.png'
import company8 from '../../public/company8.png'

function Companies() {
  return (
    <div className=" flex flex-col justify-center items-center space-y-3 mt-8 mr-10 ">
        <h1 className="text-3xl font-bold">
            Trusted Companies
        </h1>

    <div className="grid grid-cols-2 md:grid-cols-6  max-w-screen-2xl container mx-auto md:px-8 px-4  
                    w-[87%] p-10 rounded-lg place-items-start gap-16 md:w-[100%] ">
                        
      
      <div className=" flex justify-center border md:w-48 w-40 rounded-md md:p-4 p-2 bg-gray-100 
      hover:bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600 dark:bg-slate-900  ">
       <img src={company0} alt="" className="w-[50%] "/>
      </div>

      <div className=" flex justify-center border md:w-48 w-40 rounded-md md:p-4 p-2  bg-gray-100 
      hover:bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600 dark:bg-slate-900 ">
       <img src={company8} alt="" className="w-[50%]"/>
      </div>

        <div className=" flex justify-center border  md:w-48 w-40 rounded-md md:p-4 p-2  bg-gray-100 
      hover:bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600 dark:bg-slate-900 ">
       <img src={company3} alt="" className="w-[50%]"/>
      </div>

      <div className=" flex justify-center border md:w-48 w-40 rounded-md md:p-4 p-2  bg-gray-100 
      hover:bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600 dark:bg-slate-900 ">
       <img src={company7} alt="" className="w-[50%]"/>
      </div>

      <div className=" flex justify-center border md:w-48 w-40 rounded-md md:p-4 p-2  bg-gray-100 
      hover:bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600 dark:bg-slate-900 ">
       <img src={company5} alt="" className="w-[50%]"/>
      </div>

      <div className=" flex justify-center border md:w-48 w-40 rounded-md md:p-4 p-2  bg-gray-100 
      hover:bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600 dark:bg-slate-900 ">
       <img src={company6} alt="" className="w-[50%]"/>
      </div>

    </div>
    </div>
  )
}

export default Companies
