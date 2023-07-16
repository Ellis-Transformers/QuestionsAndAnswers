// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get("/questions", (request,response)=> console.log(request,response))


app.listen(PORT, (error)=> {
  console.dir(typeof(error))
  if(!error){
    console.log("Server is running");
    console.log(`App listening on port ${PORT}`);
  } else {
    console.log(`Error starting server:`, error);
  }
})