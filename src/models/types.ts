export type Question = {
  id: number;
  product_id: number | null;
  date_written: bigint | null;
  asker_name: string | null;
  asker_email: string | null;
  reported: boolean;
  helpful: number;
};
export type Answer = {
  id: number;
  question_id: number | null;
  body: string | null;
  date_written: bigint | null;
  answerer_name: string | null;
  answerer_email: string | null;
  reported: boolean;
  helpful: number;
};
export type Photo = {
  id: number;
  answer_id: number | null;
  url: string | null;
};
export const questionSelect = {
  id: true,
  product_id: true,
  date_written: true,
  asker_name: true,
  asker_email: true,
  reported: true,
  helpful: true,
};
export const answerSelect = {
  id: true,
  question_id: true,
  body: true,
  date_written: true,
  answerer_name: true,
  answerer_email: true,
  reported: true,
  helpful: true,
};
export const photoSelect = {
  id: true,
  answer_id: true,
  url: true,
};