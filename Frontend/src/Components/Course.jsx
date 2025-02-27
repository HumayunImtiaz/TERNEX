import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Course() {

  const[book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async ()=>{
      try{
        const res=await axios.get("http://localhost:4001/book")
        const data=res.data.filter((data)=>data.catagory==="Pro")
        console.log(data)
        setBook(data)
      }
      catch(error){
        console.log(error)
      }
    }
    getBook();
  },[]);
    // const paidData=list.filter((data)=>data.catagory==="Paid")

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
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  h-[100vh]">
    <div className='flex-col text-center mt-16 py-9'> 
    <h1 className='font-semibold text-4xl '>Premium Video Editing Solutions</h1>
    <p className='text-lg mt-3'>
    Our video editing services specialize in creating high-quality videos and eye-catching thumbnails optimized for social media. We deliver seamless cuts, smooth transitions, enhanced text animations, professional color correction, and synchronized music for a polished and engaging finish. 
    Plus, enjoy unlimited revisions to ensure your content meets your exact vision.
  </p>
    </div>
    <div className=' w-[97%] md:w-[100%]'>
<Slider {...settings}>
{/* <div className='mt-8 grid grid-cols-1 md:grid-cols-3'> */}
  {book.map((item)=>(
    <Cards item={item} key={item.id} />
  ))}
  {/* </div> */}
  </Slider>

</div>
</div>
  )
}

export default Course