import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //Write prisma client queries here
  // await prisma.$executeRaw`select * from "Answers"`
  // console.dir(await prisma.$executeRaw`\dt`);
  // await prisma.$executeRaw `COPY "Questions"("id", "product_id", "body", "date_written", "asker_name", "asker_email", "reported", "helpful")
  // FROM '/home/kjunghoan/hackReactor/week8/QuestionsAndAnswers/src/database/questions.csv'
  // DELIMITER ','
  // CSV HEADER;`;

  // await prisma.$executeRaw `COPY "Answers"("id", "question_id", "body", "date_written", "answerer_name", "answerer_email", "reported", "helpful")
  // FROM '/home/kjunghoan/hackReactor/week8/QuestionsAndAnswers/src/database/answers.csv'
  // DELIMITER ','
  // CSV HEADER;`;

  await prisma.$executeRaw `COPY "Photos"("id", "answer_id", "url")
  FROM '/home/kjunghoan/hackReactor/week8/QuestionsAndAnswers/src/database/answers_photos.csv'
  DELIMITER ','
  CSV HEADER;`.then(()=> {
    console.log(`finished with answers @ ${Date.now()}`)
  }).catch(error=> console.dir(error));

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