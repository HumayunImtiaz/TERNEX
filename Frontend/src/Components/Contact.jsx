import React from 'react'
import { useForm } from "react-hook-form";
import Navbar from './Navbar';

function Contact() {
     const { register,formState: { errors }, handleSubmit,reset } = useForm();
        function onSubmit(data){
            console.log(data)
            reset();
        }
  return (
    <>
    <Navbar/>
    <div className='flex h-screen  items-center justify-center mt-10'>
    <div id="" className=" w-[600px]">
<div className="">
<form className='border flex flex-col p-5 justify-center items-center'  onSubmit={handleSubmit(onSubmit)}>


<h3 className="font-bold text-lg">Contact</h3>
<div className='mt-4 space-y-2'>

<span>Name</span>
<br />
<input type="name" placeholder='Enter the Name'  className='px-20 py-5 pl-2 border rounded-md outline-none '
{...register("name",{required:true,})}
/>
{errors.name?.type==="required" && <p className='text-red-700' role='alert'>Please Enter name</p>}
</div>

{/* Email */}
<div className='mt-4 space-y-2'>

  <span>Email</span>
  <br />
  <input type="email" placeholder='Enter the Name'  className='px-20 py-5 pl-2 border rounded-md outline-none '
  {...register("email", {required:true})}
  />
  {errors.email?.type==="required" && <p className='text-red-700'>Please enter mail</p>}
</div>


<div className='mt-4 space-y-2'>
  <span>Message</span>
  <br />
<textarea placeholder='enter message ' className='border px-28 py-5 pl-2'
{...register("textarea",{required:true})}
>

</textarea>
</div>
{/* button */}
<div className='flex justify-around mt-4'> 
<button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Send</button>

      
</div>
</form >
</div>

</div>
    </div>
    </>

  )
}

export default Contact