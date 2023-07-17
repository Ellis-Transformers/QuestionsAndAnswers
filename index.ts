// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import express from "express";
import { getAnswers, getQuestions,getHome } from "./src/controller/index";

const app = express();
app.get("/", getHome)
app.get("/questions", getQuestions);
app.get("/answers", getAnswers);
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
  console.log(`App listening on port ${PORT}`);
})