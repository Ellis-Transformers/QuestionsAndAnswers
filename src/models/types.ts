export type Question = {
  id: number;
  product_id: number | null;
  date_written: bigint | number | string | Date | null;
  asker_name: string | null;
  asker_email: string | null;
  reported: boolean;
  helpful: number;
};
export type Answer = {
  id: number;
  question_id: number | null;
  body: string | null;
  date_written: bigint | number | string | Date | null;
  answerer_name: string | null;
  answerer_email: string | null;
  reported: boolean;
  helpful: number;
};
export type Photo = {
  id: number;
  url: string|null;
};
export const questionSelect = {
  id: true,
  product_id: true,
  date_written: true,
  asker_name: true,
  asker_email: true,
  reported: true,
  helpful: true
};

export const photoSelect = {
  id: true,
  url: true,
};
