/* eslint-disable @typescript-eslint/no-explicit-any */
import * as model from "../models/models";
import type {Request, Response} from "express";
export const getHome = async(request:Request, response:Response) => {
  try{response.status(200).json({
      appName: process.env.npm_package_name,
      appVersion: process.env.npm_package_version,
      options: ["/questions", "/answers", "/getAllQuestions"],
    });
  } catch (error:any){
    return response.status(500).json(error.message);
  }
};

// export const getAllQuestions = async (request:Request, response:Response) => {
//   response.something = await  model.getAllQuestions
// }

export const getAllQuestions = async(request:Request, response:Response) => {
  try {
    const questions = await model.getAllQuestions();
    return response.status(200).json(questions)
  } catch (error:any) {
    return response.status(500).json(error.message);
  }
};
export const getAnswers = async(request:Request, response:Response) => {
  await response.json({
    todo: "add end points for each question in the database, add an endpoint for each answer for each question",
  });
};
