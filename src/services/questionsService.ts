import { db } from "../utils/db.server";
import Question from "../models/QuestionsModel";
//gets all questions for a specific product_id
export const getQuestionsByProduct = async (product_id: number, page: number, count: number): Promise<Array<Omit<Question, "product_id" | "asker_email">>> => {
	return await db.questions.findMany({
		skip: (page - 1) * count,
		take: count,
		select: {
			id: true,
			body: true,
			date_written: true,
			asker_name: true,
			helpful: true,
			reported: true,
		},
		where: {
			reported: false,
			product_id: product_id,
		},
		orderBy: {
			helpful: "desc",
		},
	});
};

//creates a question entry that gets posted to the database
export const askQuestion = async (newQuestion: { product_id: number; email: string; name: string; body: string }): Promise<Question> => {
	const { product_id, email, name, body } = newQuestion;
	const date = Date.now();
	return await db.questions.create({
		data: {
			product_id,
			body,
			asker_email: email,
			asker_name: name,
			date_written: date,
		},
	});
};

// increments the value of helpful in a question when passed a question_id
export const updateQuestionHelpful = async (question_id: number): Promise<unknown> => {
	return await db.questions.update({
		where: {
			id: question_id,
		},
		data: {
			helpful: { increment: 1 },
		},
		select: {
			id: true,
			body: true,
			date_written: true,
			asker_name: true,
			helpful: true,
			reported: true,
		},
	});
};

//sets reported to true for a specified question
export const reportQuestion = async (question_id: number): Promise<unknown> => {
	return await db.questions.update({
		where: {
			id: question_id,
		},
		data: {
			reported: true,
		},
	});
};
