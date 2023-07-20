/* eslint-disable @typescript-eslint/no-explicit-any */
import * as model from "../models/models";
import { validationResult } from "express-validator"; 
import type {Request, Response} from "express";

//return App Name, current version, and options
export const getHome = async(request:Request, response:Response) => {
  try {
      response.status(200).json({
      appName: process.env.npm_package_name,
      appVersion: process.env.npm_package_version,
      description: process.env.npm_package_description
    });
  } catch (error:any){
    return response.status(500).json(error.message);
  }
};

//gets a list of questions for a specific Product_id
export const getQuestionsByProduct = async(request:Request, response:Response)=> {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    return response.status(400).json({errors: errors.array()});
  }
  try{
    const product_id: number = parseInt(request.params.product_id);
    const page: number = parseInt(request.params.page);
    const count: number = parseInt(request.params.count);
    const questions = await model.getQuestionsByProduct(product_id, page, count);
    if(questions) {
      return response.status(200).json(questions);
    } else {
      return response.status(404).json(`Product # ${product_id} could not be found.`);
    }
  } catch (error:any) {
    return response.status(500).json({
      Status:500,
      error:error.message
    });
  }
};

//gets a list of questions based off of question_id
export const getAnswers = async(request:Request, response:Response) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    return response.status(400).json({errors: errors.array()});
  }
  try{
    const question_id: number = parseInt(request.params.product_id);
    const page: number = Number(request.query.page);
    const count: number = Number(request.query.count);
    const answers = await model.getAnswersByQuestion(question_id, page, count);
    if(answers) {
      return response.status(200).json(answers);
    } else {
      return response.status(404).json(`Question # ${question_id} could not be found.`);
    }
  } catch(error:any) {
    return response.status(500).json({
      Status:500,
      Error:error.message
    })
  }
};

//posts questions
export const askQuestion = async(request: Request, response: Response) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    return response.status(400).json({errors: errors.array()});
  }
  try {
    const newQuestion = request.body;
    const postedQuestion = await model.askQuestion(newQuestion);
    if(postedQuestion) {
      return response.status(201).json(`ask question controller worked`);
    } else {
      return response.status(404).json(`Posting Question was not in correct`);
    }
  } catch (error: any) {
    return response.status(500).json({
      Status: 500,
      error: error.message
    });
  }
};

//posted an answer to database
export const answerQuestion = async(request:Request, response:Response) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    return response.status(400).json({errors: errors.array()});
  }
  try {
    const newAnswer = request.body;
    const postedAnswer = await model.answerQuestion(newAnswer);
    if(postedAnswer) {
      return response.status(201).json(`answer question controller worked`);
    } else {
      return response.status(404).json(`answer question controller broke`)
    }
  } catch (error:any) {
    return response.status(500).json({
      Status: 500,
      error: error.message
    })
  }
};
//sends a put to increase question helpful
export const updateQuestionHelpfulById = async(request:Request, response:Response) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    return response.status(400).json({errors: errors.array()});
  }
  try {
    const questionId: number = parseInt(request.params.id, 10);
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

//sends a put to report a question
export const reportQuestionById = async(request:Request, response:Response) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    return response.status(400).json({errors: errors.array()});
  }
  try {
    const questionId: number = parseInt(request.params.question_id);
    const question = await model.reportQuestion(questionId);
    if(question) {
      return response.status(202).json(question);
    } else {
      return response.status(404).json(`Could not report Question # ${questionId}`);
    }
  } catch(error: any) {
    return response.status(500).json({
      Status:500,
      error: error.message
    });
  }
};

//sends a put to increase answer helpful
export const updateAnswerHelpfulById = async(request:Request, response:Response) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    return response.status(400).json({errors: errors.array()});
  }
  try {
    const answerId: number = parseInt(request.params.id);
    const answer = await model.updateAnswerHelpful(answerId);
    if(answer) {
      return response.status(202).json(answer);
    } else {
      return response.status(404).json(`Could not update helpful on Answer # ${answerId}`)
    }
  } catch(error: any) {
    return response.status(500).json({
      Status:500,
      error: error.message
    });
  }
};

//sends a put to report an answer
export const reportAnswerById = async(request:Request, response:Response) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    return response.status(400).json({errors: errors.array()});
  }
  try {
    const answerId: number = parseInt(request.params.answer_id);
    const answer = await model.reportAnswer(answerId);
    if(answer) {
      return response.status(202).json(answer);
    } else {
      return response.status(404).json(` Could not report answer # ${answerId}`);
    }
  }  catch(error: any) {
    return response.status(500).json({
      Status:500,
      error: error.message
    });
  }
};