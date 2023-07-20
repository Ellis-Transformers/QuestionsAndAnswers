import express from "express";
import { body, validationResult } from "express-validator";
import * as controller from "../controller/controller";


export const router = express.Router();

//gets app information
router.get("/", controller.getHome);
router.get("/questions/:id", controller.getQuestionsByProduct)
router.get("/answers/:id", controller.getAnswers);
router.put("questions/:id/helpful", controller.updateQuestionHelpfulById)