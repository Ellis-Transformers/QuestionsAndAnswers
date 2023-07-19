import { db } from "../utils/db.server";
import * as types from "./types"


export const getQuestionsByProduct = async (product_id: number): Promise<types.Question[] | null> => {
  const questions = await db.questions.findMany({
    select: types.questionSelect,
    where: {
      reported: false,
      product_id
    },
    orderBy: {
      helpful: "desc"
    },
  })
  questions.forEach((question:types.Question)=> {
    let date = question.date_written;
    date = typeof(date) !== 'string' && date !== null  ? date.toString() : date;
    if(typeof(date)==='string')date = (parseInt(date,10)/1000);
    question.date_written = date;
  })
  return questions;
};

export const getAnswersByQuestion = async (question_id: number): Promise<types.Answer[] | null> => {
  const answers = await db.answers.findMany({
    // select: types.answerSelect,
    include: {
      Photos: true
    },
    where: {
      reported: false,
      question_id: question_id
    },
    orderBy: {
      helpful: "desc"
    },
  });
  answers.forEach((answer:any)=> {
      let date = answer.date_written;
      date = typeof(date) !== 'string' && date !== null  ? date.toString() : date;
      if (typeof(date)==='string') {
        date = new Date(parseInt(date,10)/1000);
      }
      return answer.date_written = date;
  })
  return answers;
};

export const getPhotosByAnswer = async (answer_id: number): Promise<types.Photo[] | null> => {
  return await db.photos.findMany({
    select: types.photoSelect,
    where: {
      answer_id,
    },
  });
};

