import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import axios from "axios"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function Freebook() {
  const [book, setBook]=useState([])
  
  
  useEffect(()=>{
    const getVideo=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/book")
        const data=res.data.filter((data)=>data.catagory==="Edit")
        console.log("this is backend",data)
        setBook(data)
      }
      catch(error){
        console.log(error)

      }
    }
    getVideo();
  },[])

    // const filterData=list.filter((data)=>data.catagory==="Free")
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoPlay: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              autoPlay: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              autoPlay: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoPlay: true,
            }
          }
        ]
       
      };
     
        
     
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-28 md:w-[100%] px-4 mt-10 md:mt-32">
        <div className='flex-col text-center '> 
        <h1 className='font-semibold md:text-4xl text-3xl pb-2'>Videos Editing Packages</h1>
        <p className='md:text-lg text-sm mt-3 '>Video Editing specializes in creating high-quality videos and thumbnails optimized for social media. Our services include seamless cuts, smooth transitions, 
          enhanced text animations, color correction, and synchronized music for a polished and engaging finish..</p>
        </div>
        <div className='mt-6 w-[97%] md:w-[100%] pb-8'>          
    <Slider {...settings}>
 
    {/* <div className='mt-8 grid grid-cols-1 md:grid-cols-3'> */}
      {book.map((item)=>(
        <a href="/cashcow">
        <Cards item={item} key={item.id} />
        </a>

      ))}
   
      {/* </div> */}
      </Slider>
    

    </div>
    </div>

   
    
    </>
  )
}

export default Freebook