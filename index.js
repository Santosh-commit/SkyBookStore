import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from "cors"

import userRoute from "./route/user.route.js";


const app = express()
app.use(cors());
app.use(express.json());// it will parse the data whatever sending vis signup form by user
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect ot mongoDB

try {

    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, })//iparser& topology used bcz we are using local installed Mongodb for some dependency
console.log("connected to MongoDB");

}catch{(error);
    console.log("Error: ",error);
}


// defining router-
app.use("/book", bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})

