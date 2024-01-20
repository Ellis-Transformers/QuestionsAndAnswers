export default interface Question {
	id: number;
	body: string;
	product_id: number;
	date_written: bigint;
	asker_name: string;
	asker_email: string;
	reported: boolean;
	helpful: number;
}
