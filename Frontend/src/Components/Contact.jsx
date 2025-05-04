import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from './Navbar';
import toast from 'react-hot-toast';
import Footer from './Footer';

function Contact() {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [result, setResult] = React.useState("");

    const onSubmit = async (data) => {
        

        const formData = new FormData();
        formData.append("access_key", "265db0d6-5eeb-46d3-ad4c-3130c4c6a5ad");
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("textarea", data.textarea);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            // const responseData = await response.json();

            if (response.ok) {
                toast.success('Form submitted successfully!');
                
                reset(); // Reset the form fields
            } else {
                toast.error(`Error: ${responseData.message}`);
              
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.');
            console.error("Error:", error);
        }
    };

    return (
        <>
            <Navbar />
            <div className='flex md:h-[30%] h-[42%]  items-center justify-center  mt-12  px-1'>
           
                <div className="w-[800px] ">
                
    
                    <div className=''>
                    
                        <form
                            className=' bg-gray-100 md:mr-0  md:ml-28 flex flex-col md:p-72 py-14 md:h-[200px]   w-96 justify-center items-center dark:bg-slate-700 dark:text-white
                                       rounded-xl hover:bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600'
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <h4 className="font-bold text-lg md:text-4xl">Contact</h4>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input
                                    type="name"
                                    placeholder='Enter the Name'
                                    className='px-20 py-5 md:py-5 pl-2 md:p-2 md:w-[30rem] border rounded-md outline-none dark:text-black'
                                    {...register("name", { required: true })}
                                />
                                {errors.name?.type === "required" && <p className='text-red-700' role='alert'>Please enter your name</p>}
                            </div>

                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder='Enter the Email'
                                    className='px-20  md:py-5 md:w-[30rem] md:p-2  py-5 pl-2 border rounded-md outline-none dark:text-black'
                                    {...register("email", { required: true })}
                                />
                                {errors.email?.type === "required" && <p className='text-red-700'>Please enter your email</p>}
                            </div>

                            <div className='mt-4 space-y-2'>
                                <span>Message</span>
                                <br />
                                <textarea
                                    placeholder='Enter message'
                                    className='dark:text-black border  px-20 md:py-10 md:p-2 md:w-[30rem] mr-0  py-5 pl-2 rounded-lg '
                                    {...register("textarea", { required: true })}
                                ></textarea>
                                {errors.textarea?.type === "required" && <p className='text-red-700'>Please enter your message</p>}
                            </div>

                            <div className='flex justify-around mt-4'>
                                <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         
      
        </>
    );
}

export default Contact;
