import express from "express";
import { body, validationResult } from "express-validator";
import * as controller from "../controller/controller";


export const router = express.Router();

//gets app information
router.get("/home", controller.getHome);
router.get("/answers", controller.getAnswers);
router.get("/questions/:id", controller.getQuestionsByProduct)