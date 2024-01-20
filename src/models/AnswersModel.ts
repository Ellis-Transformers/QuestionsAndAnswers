export default interface Answer {
	id: number;
	question_id: number;
	body: string;
	date_written: bigint;
	answerer_name: string;
	answerer_email: string;
	reported: boolean;
	helpful: number;
	Photos: object[] | [];
}
