import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {

  const { register,formState: { errors }, handleSubmit,reset } = useForm();
  function onSubmit(data){
    const userInfo={
      // Get information from user
      email:data.email,
      password:data.password
    }    
      
  
  axios.post("http://localhost:4001/user/login",userInfo).then((res)=>{
    console.log("jbskdlskd" ,res.data)
    if(res.data){
      toast.success('Successfully Login!');
      document.getElementById("my_modal_3").close();     
  
      //we use set timeout for remove the model of login
    }
    setTimeout(() => {
      
      localStorage.setItem("User",JSON.stringify(res.data.user))
      window.location.reload();
      
    },2000 );

  }).catch((err)=>{
    if(err.response){
      console.log(err);
      toast.error("Error:"+err.response.data.message);
    }
    reset();
  })
    
  }

  return (
    <div className=' '>
        <dialog id="my_modal_3" className="modal ">
  <div className="modal-box dark:bg-slate-700 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/signup" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Login</h3>
    {/* Email */}
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" placeholder='Enter the Email'  className='px-2 border rounded-md outline-none py-1 text-black'
     {...register("email", { required: true })} 
    //  aria-invalid={errors.email ? "true" : "false"} 
      />
      {errors.email?.type === 'required' && <p className='text-red-700' role="alert">Email is required</p>}
    </div>
  
    {/* Pasword */}
    <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br />
      <input type="password" placeholder='Enter Password'  className='px-2 border rounded-md outline-none py-1 text-black'
      {...register("password",{required:true, 
        pattern:{value:/^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          message:"Enter valid password"
} 
        
      })}
      />
      {errors.password && <p className='text-red-700'>{errors.password.message}</p>}
    </div>
    {/* button */}
    <div className='flex justify-around mt-4'> 
    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
    
    <p>Not Registered? 
      <Link to="/signup" className='underline text-blue-500'>Signup</Link>{" "}
    </p>
    
    </div>
    </form>
  </div>
  
</dialog>
    </div>
  )
}

export default Login