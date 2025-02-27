import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    // For logout process
    const [authUser,setAuthUser]=useAuth()

   const handlelogout=()=>{
    try{
        // we change the state of user 
        setAuthUser({
            ...authUser,
            // ye user jo context waali py use kia hai whi hai 
            User:null
        });
        localStorage.removeItem("User")
        toast.success("Logout Sucessfully")
       
        setTimeout(() => {
            window.location.reload();
        }, 2000)
    }
    catch(error){
        toast.error("Error"+ error.message);
    }
   }


  return (
    <div>
        <button className=" bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600  text-white p-2 rounded-md hover:bg-blue-500 duration-300"
        onClick={handlelogout}
        >Logout</button>
    </div>
  )
}

export default Logout