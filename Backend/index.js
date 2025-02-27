// This is old syntax
// const express = require('express') 
// const dotenv= require ("dotenv")

//ES6 new Syntax
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"
import axios from "axios"


const app = express()
//This is miiddlewere
app.use(cors());
app.use(express.json());



dotenv.config();
const port=process.env.PORT || 4000
const URI= process.env.MongoDBURI

//connect to MongoDB
try{
    mongoose.connect(URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });

    console.log("Connected to MongoDB");
}
catch(error){

    console.log("Errore :", error);
}

// defining Router
app.use("/user",userRoute);
app.use("/book",bookRoute);


app.get("/api/search", async (req, res) => {
    try {
      const { q } = req.query;  // Get the 'q' query parameter from the request
      if (!q) {
        return res.status(400).json({ error: "'q' query is required" });
      }
  
      // Make the API request to Lexica API
      const response = await axios.get(`https://lexica.art/api/v1/search?q=${q}`);
  
      // Send the image data to the client
      res.json(response.data);  // Send the response data from Lexica API back to the client
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Failed to generate image" });
    }
  });

app.listen(port, () => {
  console.log(`Example is listening on port ${port}`)
})