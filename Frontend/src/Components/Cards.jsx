import React from 'react'

function Cards({item}) {
    console.log(item.image )
  return (
    <>
    <div className='mt-2 my-3 p-5'>
    <div className="card bg-base-10 h-[380px]  shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border
                     bg-gray-100 
      hover:bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">

  <figure>
    <img className='w-full'
      src={item.image}
      alt="Shoes" />
  </figure>

  
  <div className="card-body h-[160px] w-full ">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.catagory}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer px-2 py-3 rounded-full border-2pxl hover:bg-pink-500 duration-200 hover:text-white
                       badge-outline badge">
        <a href="/contact">Book Now</a>
        </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards