import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import controller = require("../controller/controller");


import * as Model from "../models/models";

export const router = express.Router();

//GET: List of all Questions
router.get("/getAllquestions", controller.getAllQuestions);
router.get("/", controller.getHome);
// app.get("/answers", controller.getAnswers);