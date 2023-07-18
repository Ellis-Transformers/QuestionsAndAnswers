// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import controller = require("./controller/index");
dotenv.config();

if(!process.env.PORT) {
  process.exit(1);
}
const PORT:number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(cors());
app.use(express.json());


app.get("/", controller.getHome);
app.get("/questions", controller.getQuestions);
app.get("/answers", controller.getAnswers);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
