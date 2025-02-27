import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const VideoGenerate = () => {
  const [query, setQuery] = useState("");
  const [media, setMedia] = useState([]);
  

  const fetchMedia = async () => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/videos/search?query=${query}&per_page=500`, 
        {
          headers: {
            Authorization: "IEh9SZ2IpITj8xz1CAti1bCiMBywJC5XmvEnBoG4puoVsqgBCbZVSYIh", // Replace with your actual API key
          },
        }
      );
      setMedia(response.data.videos); // For Videos
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };


  return (
    <div>   
      <Navbar/>
    <div className="flex flex-col justify-center items-center space-y-5 p-4 w-[100%] mt-16 ">
   
       <h1 className='text-center md:text-3xl text-2xl font-bold'>Search Videos</h1>  
       <div className="p-5 border w-[100%] ">
        <button className="bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600 p-3  rounded-l-md   "><a href="/stockimage">Image</a></button>
      <input
        type="text"
        className=" py-3 w-[50%] rounded-r-md mr-5  border text-start px-3 dark:text-black" 
        placeholder="Enter keyword"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-green-400 p-3 rounded-md" onClick={fetchMedia} >Search</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 w-[100%] px-10 py-1 h-full  ">
        {media.map((video) => (
         <video key={video.id} controls className="p-3 py-1 h-[300px] w-full">
            <source src={video.video_files[0].link} type="video/mp4 " />
            
          </video>
        ))}
      </div>
    </div>
    </div>
 
  );
};

export default VideoGenerate;
