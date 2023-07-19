/* eslint-disable @typescript-eslint/no-explicit-any */
import * as model from "../models/models";
import type {Request, Response} from "express";


//return App Name, current version, and options
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
//gets a list of every question that has not been reported regardless of P_id
export const allQuestions = async(request:Request, response:Response) => {
  try {
    const questions = await model.allQuestions();
    return response.status(200).json(questions)
  } catch (error:any) {
    return response.status(500).json(error.message);
  }
};
//gets a list of questions for a specific Product_id
export const getQuestionsByProduct = async(request:Request, response:Response)=> {
  const productId: number = parseInt(request.params.id, 10);
  try{
    const questions = await model.getQuestionsByProduct(productId);
    if(questions) {
      return response.status(200).json(questions);
    } else {
      return response.status(404).json(`Product # ${productId} could not be found.`);
    }
  } catch (error:any) {
    return response.status(500).json(error.message);
  }
}

export const getAnswers = async(request:Request, response:Response) => {
  await response.json({
    todo: "add end points for each question in the database, add an endpoint for each answer for each question",
  });
};
