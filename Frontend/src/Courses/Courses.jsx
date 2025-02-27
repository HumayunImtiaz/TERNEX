import React from 'react'
import Navbar from '../Components/Navbar'
import Course from '../Components/Course'
import Footer from '../Components/Footer'
import list from "../../public/list.json"

function Courses() {
    console.log(list)
  return (
    <>
    <Navbar/>
    <div className='md:pb-10 pb-52'>
    <Course/>
    </div>
    <Footer/>

    </>
  )
}

export default Courses