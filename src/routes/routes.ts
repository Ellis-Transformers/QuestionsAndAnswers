import express from "express";
import { body, param, query } from "express-validator";
import * as controller from "../controller/controller";

export const router = express.Router();

//gets app information
router.get("/", controller.getHome);
//
router.get(
  "/questions",
  param("product_id").isInt(),
  param("page").isInt(),
  param("count").isInt(),
  controller.getQuestionsByProduct
);
router.get(
  "/questions/:question_id/answers",
  param("question_id").isInt(),
  query("page").isInt(),
  query("count").isInt(),
  controller.getAnswers
);
router.post(
  "/questions",
  param("product_id").isInt(),
  body("body").isString(),
  body("name").isString(),
  body("email").isString(),
  body("product_id").isInt(),
  controller.askQuestion
);
router.post(
  "/questions/:question_id/answers",
  param("question_id").isInt(),
  body("body").isString(),
  body("name").isString(),
  body("email").isString(),
  body("photos").isArray({ min: 0, max: 5 }),
  controller.answerQuestion
);
router.put(
  "questions/:question_id/helpful",
  param("question_id").isInt(),
  controller.updateQuestionHelpfulById
);
router.put(
  "/questions/:question_id/report",
  param("question_id").isInt(),
  controller.reportQuestionById
);
router.put(
  "/answers/:answer_id/helpful",
  param("answer_id").isInt(),
  controller.updateAnswerHelpfulById
);
router.put(
  "/answers/:answer_id/report",
  param("answer_id").isInt(),
  controller.reportAnswerById
);