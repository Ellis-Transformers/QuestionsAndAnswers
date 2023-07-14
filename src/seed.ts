import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const pathToFile = `/home/kjunghoan/hackReactor/week8/QuestionsAndAnswers/src/database/`;

async function main() {
  //Write prisma client queries here
  await prisma.$executeRaw `COPY Answers(id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
  FROM '${pathToFile}answers.csv'
  DELIMITER ','
  CSV HEADER;`;

  await prisma.$executeRaw `COPY Photos(id, answer_id, url)
  FROM '${pathToFile}answers_photos.csv'
  DELIMITER ','
  CSV HEADER;`

  await prisma.$executeRaw `COPY Questions(id, product_id, body, date_written, asker_name, asker_email, reported, helpful)
  FROM '${pathToFile}questions.csv'
  DELIMITER ','
  CSV HEADER;`;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1)
  })