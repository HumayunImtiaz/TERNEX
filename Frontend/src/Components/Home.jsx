import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import VideoEditing from './VideoEditing'
import Footer from './Footer'
import Contact from './Contact'
import CounterProject from './CounterProject'
import Companies from './Companies'
import Webservice from './Webservice'
import About from './About'




function Home() {
  return (
   <>

       <Navbar/>
       <Banner/>
       <CounterProject/>
       <VideoEditing/>
       <hr />
       <Webservice/>
       <hr />
       <About/>
       <hr />
       <Companies/>
       <hr />
       <Contact/>
       <Footer/>
 </>

  
   
  )
}

export default Home