// import model from "../models/index";
import type {Request, Response} from "express";
export const getHome = async(request:Request, response:Response) => {
  response.json({
    appName: process.env.npm_package_name,
    appVersion: process.env.npm_package_version,
    options: ["/questions", "/answers"],
  });
};
export const getQuestions = async(request:Request, response:Response) => {
  await response.json({
    todo: "add end points for each question in the database",
  });
};
export const getAnswers = async(request:Request, response:Response) => {
  await response.json({
    todo: "add end points for each question in the database, add an endpoint for each answer for each question",
  });
};
