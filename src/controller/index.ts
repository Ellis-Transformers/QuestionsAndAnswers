// import model from "../models/index";
import "main.d.ts";

export const getHome = (
  request: unknown,
  response: getHomeResponse
  ) => {
  response.json({
    appName: process.env.npm_package_name,
    appVersion: process.env.npm_package_version,
    options: [
      "/questions",
      "/answers"
    ],
  });
};
export const getQuestions = (
  request: unknown,
  response: getAnswersResponse
) => {
  response.json({
    todo: "add end points for each question in the database",
  });
};
export const getAnswers = (
  request: unknown,
  response: getAnswersResponse
  ) => {
  response.json({
    todo: "add end points for each question in the database, add an endpoint for each answer for each question",
  });
};


