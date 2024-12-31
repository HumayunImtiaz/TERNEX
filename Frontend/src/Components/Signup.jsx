import React from 'react'
import { data, Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

function Signup() {
    const { register,formState: { errors }, handleSubmit,reset } = useForm();
    function onSubmit(data){
        console.log(data)
        reset();
    }
  return (
    <div>
        <>
        <div className='flex h-screen  items-center justify-center  '>
        <div id="" className=" w-[600px]">
  <div className=" modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
    
    <span>Name</span>
    <br />
    <input type="name" placeholder='Enter the Name'  className='px-2 border rounded-md outline-none py-1'
    {...register("name",{required:true,})}
    />
    {errors.name?.type==="required" && <p className='text-red-700' role='alert'>Please Enter name</p>}
  </div>

    {/* Email */}
    <div className='mt-4 space-y-2'>
    
      <span>Email</span>
      <br />
      <input type="email" placeholder='Enter the Name'  className='px-2 border rounded-md outline-none py-1'
      {...register("email", {required:true})}
      />
      {errors.email?.type==="required" && <p className='text-red-700'>Please enter mail</p>}
    </div>
  
    {/* Pasword */}
    <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br />
      <input type="password" placeholder='Enter the Password'  className='px-2 border rounded-md outline-none py-1'
      {...register("password",{required:true,
        pattern:{value:/^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
            message:"Make strong password"
        }})}
      />
      {errors.password && <p className='text-red-700'>{errors.password.message}</p>}
    </div>
    {/* button */}
    <div className='flex justify-around mt-4'> 
    <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>

             <button className='underline text-blue-500'
             onClick={()=>
                document.getElementById("my_modal_3").showModal()
            }
            >Login
             </button>
            <Login/>
    </div>
    </form >
  </div>
  
</div>
        </div>
        </>
    </div>
  )
}

export default Signup