import { db } from "../utils/db.server";
import Answer from "../models/AnswersModel";

//gets all the answers for a specific question_id
export const getAnswersByQuestion = async (question_id: number, page: number, count: number): Promise<Array<Omit<Answer, "question_id" | "answerer_email" | "reported">>> => {
	return await db.answers.findMany({
		skip: (page - 1) * count,
		take: count,
		select: {
			id: true,
			body: true,
			date_written: true,
			answerer_name: true,
			helpful: true,
			Photos: {
				select: {
					id: true,
					url: true,
				},
			},
		},
		where: {
			reported: false,
			question_id,
		},
		orderBy: {
			helpful: "desc",
		},
	});
};

//creates entires in the answers table of the database
export const answerQuestion = async (
	question_id: string,
	newAnswer: {
		body: string;
		name: string;
		email: string;
		photos: string[] | [];
	}
): Promise<unknown> => {
	const { body, name, email, photos } = newAnswer;
	const listOfPhotos = photos.map((photo: string) => {
		return { url: photo };
	});
	return await db.answers.create({
		data: {
			question_id: Number(question_id),
			body,
			date_written: BigInt(Date.now()),
			answerer_name: name,
			answerer_email: email,
			Photos: {
				createMany: {
					data: listOfPhotos,
				},
			},
		},
		select: {
			id: true,
			question_id: true,
			body: true,
			date_written: true,
			answerer_name: true,
			answerer_email: true,
			reported: true,
			helpful: true,
			Photos: {
				select: {
					id: true,
					answer_id: true,
					url: true,
				},
			},
		},
	});
};

//increments the value of helpful in an answer when passed an answer_id
export const updateAnswerHelpful = async (answer_id: number): Promise<unknown> => {
	return await db.answers.update({
		where: {
			id: answer_id,
		},
		data: {
			helpful: { increment: 1 },
		},
	});
};

//sets reported to true for a specific answer
export const reportAnswer = async (answer_id: number): Promise<unknown> => {
	return await db.answers.update({
		where: {
			id: answer_id,
		},
		data: {
			reported: true,
		},
	});
};
