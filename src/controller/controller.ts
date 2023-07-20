/* eslint-disable @typescript-eslint/no-explicit-any */
import * as model from "../models/models";
import type {Request, Response} from "express";


//return App Name, current version, and options
export const getHome = async(request:Request, response:Response) => {
  try {
      response.status(200).json({
      appName: process.env.npm_package_name,
      appVersion: process.env.npm_package_version,
      options: ["/questions", "/answers"],
    });
  } catch (error:any){
    return response.status(500).json(error.message);
  }
};
//gets a list of questions for a specific Product_id
export const getQuestionsByProduct = async(request:Request, response:Response)=> {
  const productId: number = parseInt(request.params.id);
  try{
    const questions = await model.getQuestionsByProduct(productId);
    if(questions) {
      return response.status(200).json(questions);
    } else {
      return response.status(404).json(`Product # ${productId} could not be found.`);
    }
  } catch (error:any) {
    return response.status(500).json({
      Status:500,
      error:error.message
    });
  }
}

export const getAnswers = async(request:Request, response:Response) => {
  const questionId: number = parseInt(request.params.id, 10);
  try{
    const answers = await model.getAnswersByQuestion(questionId);
    if(answers) {
      return response.status(200).json(answers);
    } else {
      return response.status(404).json(`Question # ${questionId} could not be found.`);
    }
  } catch(error:any) {
    return response.status(500).json({
      Status:500,
      Error:error.message
    })
  }
};


export const updateQuestionHelpfulById = async(request:Request, response:Response) => {
  const questionId: number = parseInt(request.params.id, 10);
  try {
    const question = await model.updateQuestionHelpful(questionId);
    if (question) {
      return response.status(202).json(question);
    } else {
      return response.status(404).json(`Could not update helpful on Question # ${questionId}`);
    }
  } catch (error:any) {
    return response.status(500).json({
      Status:500,
      Error:error
    });
  }
};

export const 