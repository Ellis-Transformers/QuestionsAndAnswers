import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import * as controller from "../controller/controller";


import * as Model from "../models/models";
export const router = express.Router();

//gets a 
router.get("/home", controller.getHome);
//GET: List of all Questions
router.get("/allquestions", controller.allQuestions);

// app.get("/answers", controller.getAnswers);
router.get("/questions:id", controller.getQuestionsByProduct)