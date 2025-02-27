
//In this file we use useContext for Authentication
import React, { createContext, useContext, useState } from 'react'



// First we createContext
export const AuthContext=createContext();

// Children mean to acces all components for transfer in this component data. (e.g: App.jsx, Navbar.jsx..etc..)
export default function AuthProvider({children}) {
  console.log(localStorage.getItem("User"))
    const initialAuth=localStorage.getItem("User");
    // console.log("new data"+ initialAuth)

    //Ab ham set kry gy agr login hai tu login show hu nhi tu logout.
    const[authUser, setAuthUser]=useState(
        initialAuth ? JSON.parse(initialAuth):undefined )
 


  return (
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
       
    </AuthContext.Provider>
  )
}
export const useAuth=()=>useContext(AuthContext)

// Now we wrap this  component in "main.jsx"
