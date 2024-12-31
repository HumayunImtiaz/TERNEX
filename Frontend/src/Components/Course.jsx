import React from 'react'
import Cards from './Cards';

import list from '../../public/list.json'
import { Link } from 'react-router-dom';

function Course() {
    const paidData=list.filter((data)=>data.catagory==="Paid")

   
   
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-14 text-center justify-center items-center py-14'>
            <h1 className='text-2xl md:text-4xl '>We're delighted to how you <span className='text-pink-500'>Here:)</span> </h1>

            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae delectus consequuntur
                 hic dolores asperiores aperiam, hic dolores asperiores aperiam, hic dolores asperiores aperiam,
                 hic dolores asperiores aperiam, hic dolores asperiores aperiam, hic dolores asperiores aperiam,
               quis, amet mollitia veritatis esse quaerat quod illo unde dolorum ducimus iusto perspiciatis sit .
            </p>
          <h1>hello </h1>
            <Link to={"/"}> 
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>
          
        </div>

    <div className='mt-8 grid grid-cols-1 md:grid-cols-4'>        
      {paidData.map((item)=>(
        <Cards item={item} key={item.id} />
      ))}
      
        </div>

    </div>
    </>
  )
}

export default Course