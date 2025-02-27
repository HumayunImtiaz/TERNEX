import React from 'react'
import { data, Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const location=useLocation()
  const navigate=useNavigate()
  const from =location.state?.from?.pathname || "/"

    const { register,formState: { errors }, handleSubmit,reset } = useForm();

    const onSubmit=async(data)=>{
      const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password
      }      
    
    await axios.post("http://localhost:4001/user/signup",userInfo).then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Successfully created!');
        // when signup completed than move on Home page
        navigate(from,{replace:true})

      }
    
      localStorage.setItem("User",JSON.stringify(res.data))
      setTimeout(() => {
        window.location.reload();
        localStorage.setItem("User",JSON.stringify(res.data))
        
      },2000 ); 
    }
    
  ).catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error("Error:"+err.response.data.message);
      }
      reset();
    })

  
  }
   
  return (
    
    <div>
        <>
      
        <div  className='flex h-screen  items-center justify-center bg-black '>
        
        <div  className=" w-[600px] ">
          
        
  <div className="modal-box dark:bg-slate-700  " >

    <form method="dialog "  onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold text-lg dark:text-white">Signup</h3>
    <div className='mt-4 space-y-2'>
    
    <span className='dark:text-white'>Name</span>  
  
    <br />
    <input type="text" placeholder='Enter the Name'  className='pl-2 px-20 border rounded-md outline-none py-2 text-black'
    {...register("fullname",{required:true,})}
    />
    {errors.fullname?.type==="required" && <p className='text-red-700' role='alert'>Please Enter name</p>}
  </div>

    {/* Email */}
    <div className='mt-4 space-y-2'>
    
      <span className='dark:text-white'>Email</span>
      <br />
      <input type="email" placeholder='Enter the Name'  className='pl-2 px-20 border rounded-md outline-none py-2 text-black'
      {...register("email", {required:true})}
      />
      {errors.email?.type==="required" && <p className='text-red-700'>Please enter mail</p>}
    </div>
  
    {/* Pasword */}
    <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br />
      <input type="password" placeholder='Enter the Password'  className='pl-2 px-20 border rounded-md outline-none py-2 text-black'
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

             <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mr-10'
             onClick={()=>{
                // document.getElementById("my_modal_3").showModal()                
      
             }             
            }
            
            ><a href='/'>
              Back
              </a>
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