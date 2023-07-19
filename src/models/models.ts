import { db } from "../utils/db.server";
import * as types from "./types"


export const getQuestionsByProduct = async (product_id: number): Promise<types.Question[] | null> => {
  return await db.questions.findMany({
    select: types.questionSelect,
    where: {
      reported: false,
      product_id
    },
    orderBy: {
      helpful: "desc"
    },
  });
};

export const getAnswersByQuestion = async (question_id: number): Promise<types.Answer[] | null> => {
  return await db.answers.findMany({
    select: types.answerSelect,
    where: {
      reported: false,
      question_id: question_id
    },
    orderBy: {
      helpful: "desc"
    },
  });
};
export const getPhotosByAnswer = async (answer_id: number): Promise<types.Photo[] | null> => {
  return await db.photos.findMany({
    select: types.photoSelect,
    where: {
      answer_id: answer_id,
    },
  });
};