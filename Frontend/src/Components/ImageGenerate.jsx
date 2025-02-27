import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ImageGenerate = () => {
  const [query, setQuery] = useState("");
  const [media, setMedia] = useState([]);
 

  const fetchMedia = async () => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&per_page=500`, 
        {
          headers: {
            Authorization: "IEh9SZ2IpITj8xz1CAti1bCiMBywJC5XmvEnBoG4puoVsqgBCbZVSYIh", // Replace with your actual API key
          },
        }
      );
      setMedia(response.data.photos); // For images
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };


  return (
    <div>   
      <Navbar/>
    <div className="flex flex-col justify-center items-center space-y-5 p-4 w-[100%] mt-16  ">
   
       <h1 className='text-center md:text-3xl text-2xl font-bold'>Search Images</h1>  
       <div className="p-5 w-[100%] ">
       <button className="bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600 p-3  rounded-l-md "><a href="/stockimage">Video</a></button>
      <input
        type="text"
        className=" py-3 w-[50%] rounded-r-md mr-5  border text-start px-3 dark:text-black " 
        placeholder="Enter keyword"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-green-400 p-3 rounded-md" onClick={fetchMedia} >Search</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 w-[100%] px-10 py-2 px ">
        {media.map((item) => (
          <img key={item.id} src={item.src.medium} alt={item.photographer}className="border"/>
        ))}
      </div>
    </div>
    </div>
 
  );
};

export default ImageGenerate;
