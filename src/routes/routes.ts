import express from "express";
import { body } from "express-validator";
import * as controller from "../controller/controller";

export const router = express.Router();

router.get("/", controller.getHome);
router.get("/questions", controller.getQuestionsByProduct);
router.get("/questions/:question_id/answers", controller.getAnswers);
router.post("/questions", controller.askQuestion);
router.post("/questions/:question_id/answers", body("photos").isArray({ min: 0, max: 5 }), controller.answerQuestion);
router.put("/questions/:question_id/helpful", controller.updateQuestionHelpfulById);
router.put("/questions/:question_id/report", controller.reportQuestionById);
router.put("/answers/:answer_id/helpful", controller.updateAnswerHelpfulById);
router.put("/answers/:answer_id/report", controller.reportAnswerById);
