import { db } from "../utils/db.server";

type Question = {
  id: number;
  product_id: number;
  date_written: number;
  asker_name: string;
  asker_email: string;
  reported: boolean;
  helpful: number;
};

export const getAllQuestions = async (): Promise<Question[]> => {
  return db.questions.findMany({
    select: {
      id: true,
      product_id: true,
      date_written: true,
      asker_name: true,
      asker_email: true,
      reported: true,
      helpful: true || false,
    },
  });
};
