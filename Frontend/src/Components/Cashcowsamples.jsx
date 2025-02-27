import React from 'react'
import Sample from './Sample'

function Cashcowsamples() {
  return (
    
    <div className='flex flex-col justify-center bg-gradient-to-br from-green-600 from-10% via-primary via-40% to-blue-700 opacity-90 dark:'>
        <div className='mt-20 px-10 mb-[-60px]'> 
            <h1 className='text-center md:text-3xl text-2xl font-bold'>Cashcow Video</h1>  
             <iframe
                    className='rounded-2xl md:h-[500px] h-[320px] w-[100%] hover:scale-105 mt-5'
                    src="https://www.youtube.com/embed/ZSiXZxVpVhs?si=tRri5xdz29EnC5x-"
                    title="YouTube video"
                    
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
            ></iframe>
              
        </div>

        <div className=''>
            <Sample/>
        </div>
    </div>
  )
}

export default Cashcowsamples