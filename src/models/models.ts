import { db } from "../utils/db.server";
import * as types from "./types"

//gets all questions for a specific product_id
export const getQuestionsByProduct = async (product_id: number, page:number, count:number): Promise<Omit<types.Question, "product_id" | "asker_email" | "Answers">[]> => {
  return await db.questions.findMany({
    skip: (page * count),
    take: count,
    select: {
      id: true,
      body: true,
      date_written: true,
      asker_name: true,
      helpful: true,
      reported: true
    },
    where: {
      reported: false,
      product_id: product_id
    },
    orderBy: {
      helpful: "desc"
    },
  });
};

//gets all the answers for a specific question_id
export const getAnswersByQuestion = async (question_id: number, page: number, count: number): Promise<any> => {
  const answers = await db.answers.findMany({
    skip: (page * count),
    take:count,

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

//creates a question entry that gets posted to the database
export const askQuestion = async (newQuestion) => {
 
};

//creates entires in the answers table of the database
export const answerQuestion = async(newAnswer:any): Promise<any> => {
  const {question_id, body, answerer_name, answerer_email, photos}=newAnswer;
  const createEntry = ()=> {
    db.answers.create({
    data: {
      question_id,
      body,
      answerer_name,
      answerer_email,
    }
  });
  photos.forEach((photo:any)=> {
    db.photos.create({
      data: {
        answer_id:photo.answer_id,
        url: photo.url,
      }
    });
  });
};
  return createEntry();
}

// increments the value of helpful in a question when passed a question_id
export const updateQuestionHelpful = async (question_id: number): Promise<types.Question> => {
  return db.questions.update({
    where: {
      id: question_id
    },
    data: {
      helpful: {
        increment: 1
      }
    }
  })
};

//sets reported to true for a specified question
export const reportQuestion = async (question_id: number): Promise<any> => {
  return db.questions.update({
    where: {
      id: question_id
    },
    data: {
      reported: true
    }
  });
};

//increments the value of helpful in an answer when passed an answer_id
export const updateAnswerHelpful = async (answer_id: number): Promise<any> => {
  return db.answers.update({
    where: {
      id: answer_id
    },
    data: {
      helpful: {
        increment: 1
      }
    }
  })
};

//sets reported to true for a specific answer
export const reportAnswer = async (answer_id: number): Promise<any> => {
  return db.answers.update({
    where: {
      id: answer_id
    },
    data: {
      reported: true
    }
  });
};