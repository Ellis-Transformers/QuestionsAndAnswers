import { db } from "../utils/db.server";

type Question = {
  id: number;
  product_id: number | null;
  date_written: bigint | null;
  asker_name: string | null;
  asker_email: string | null;
  reported: boolean;
  helpful: number;
};
type Answer = {
  id: number;
  question_id: number | null;
  body: string | null;
  date_written: bigint | null;
  answerer_name: string | null;
  answerer_email: string | null;
  reported: boolean;
  helpful: number;
};
type Photo = {
  id: number;
  answer_id: number | null;
  url: string | null;
};
const questionSelect = {
  id: true,
  product_id: true,
  date_written: true,
  asker_name: true,
  asker_email: true,
  reported: true,
  helpful: true,
};

const answerSelect = {
  id: true,
  question_id: true,
  body: true,
  date_written: true,
  answerer_name: true,
  answerer_email: true,
  reported: true,
  helpful: true,
};

const photoSelect = {
  id: true,
  answer_id: true,
  url: true,
};
export const getAllQuestions = async (): Promise<Question[]> => {
  return await db.questions.findMany({
    select: questionSelect,
    where: {
      reported: false
    },
    orderBy: {
      helpful: "desc"
    },
  });
};
export const getReportedQuestions = async (): Promise<Question[] | null> => {
  return await db.questions.findMany({
    select: questionSelect,
    where: {
      reported: true
    },
    orderBy: {
      helpful: "desc"
    },
  });
};
export const getQuestionsByProduct = async (product_id: number): Promise<Question[] | null> => {
  return await db.questions.findMany({
    select: questionSelect,
    where: {
      reported: false,
      product_id: product_id
    },
    orderBy: {
      helpful: "desc"
    },
  });
};
export const getAnswersByQuestion = async (question_id: number): Promise<Answer[] | null> => {
  return await db.answers.findMany({
    select: answerSelect,
    where: {
      reported: false,
      question_id: question_id
    },
    orderBy: {
      helpful: "desc"
    },
  });
};
export const getPhotosByAnswer = async (answer_id: number): Promise<Photo[] | null> => {
  return await db.photos.findMany({
    select: photoSelect,
    where: {
      answer_id: answer_id,
    },
  });
};
