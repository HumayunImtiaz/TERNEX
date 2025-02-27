import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const Signup=async (req,res)=>{

    try{
        // This data is Acces from user 
        const {fullname,email,password}= req.body;
        //Check that email register or not
        const user=await User.findOne({email});
        //if user already register
        if(user){

            return res.status(400).json({message:"Account Already Register"})
        }
        // if not register so create new account
        const hashPassword= await bcryptjs.hash(password,10)// for hide the password
        const createUser=new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        //For save the registration
       await createUser.save();
       res.status(201).json({message:"User Details:",User:{
        _id:createUser._id,
        fullname:createUser.fullname,
        email:createUser.email,
       }})
    }
    catch(error){
        console.log("Error:" + error.message)
        res.status(500).json({message:"Internal error"})
    }
};

// export const Login=async(req,res)=>{
//     // we use promisses 
//     try{
//         // Access these data from user 
//         const{email,password}=req.body;
//         //Check the data from database
//         const user=await User.findOne({email});
//         const isMatch= await bcryptjs.compare(password,user.password)
//         if (!user || !isMatch){
//             return res.status(400).json({message:"Invalid Email or Password"})
//         }
//         else{
//              //Now we show login user data on frontend
//              res.status(200).json({message:"Login Sucessfully",
//             user:{
//                 _id:user._id,
//                 fullname:user.fullname,
//                 email:user.email,
//                  },
//             });
            
             
//         }       
//     }
//     catch(error){
//         console.log("Error: " + error.message)
//         res.status(500).json({message:"Internal server Error"})
//     }
// }

export const Login = async (req, res) => {
    try {
        // Access these data from user 
        const { email, password } = req.body;

        // Check if the user exists in the database
        const user = await User.findOne({ email });

        // If user doesn't exist, return an error
        if (!user) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        // Compare the provided password with the hashed password
        const isMatch = await bcryptjs.compare(password, user.password);

        // If password doesn't match, return an error
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        // Now we show logged-in user data on the frontend
        res.status(200).json({
            message: "Login Successfully",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server Error" });
    }
};


