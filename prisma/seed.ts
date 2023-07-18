import { db } from '../src/utils/db.server';


async function main() {
  //Write prisma client queries here
  // "/home/kjunghoan/hackReactor/week8/QuestionsAndAnswers/prisma//questions.csv"
  // "/home/kjunghoan/hackReactor/week8/QuestionsAndAnswers/prisma//answers.csv"
  // "/home/kjunghoan/hackReactor/week8/QuestionsAndAnswers/prisma//answers_photos.csv"
  
  console.log(`seeding started @ ${Date.now()}`)
  
  await db.$executeRaw `drop table IF EXISTS "Questions" cascade;`;
  await db.$executeRaw `drop table IF EXISTS "Answers" cascade;`;
  await db.$executeRaw `drop table IF EXISTS "Photos";`;
  await db.$executeRaw `COPY "Questions"("id", "product_id", "body", "date_written", "asker_name", "asker_email", "reported", "helpful")
  FROM '/home/kjunghoan/hackReactor/week8/QuestionsAndAnswers/prisma//questions.csv'
  DELIMITER ','
  CSV HEADER;`
  .then(()=> {
    console.log(`finished with Questions @ ${Date.now()}`)
  })
  .catch(error=> console.dir(error));

  await db.$executeRaw `COPY "Answers"("id", "question_id", "body", "date_written", "answerer_name", "answerer_email", "reported", "helpful")
  FROM '/home/kjunghoan/hackReactor/week8/QuestionsAndAnswers/prisma//answers.csv'
  DELIMITER ','
  CSV HEADER;`
  .then(()=> {
    console.log(`finished with Answers @ ${Date.now()}`)
  })
  .catch(error=> console.dir(error));

  await db.$executeRaw `COPY "Photos"("id", "answer_id", "url")
  FROM '/home/kjunghoan/hackReactor/week8/QuestionsAndAnswers/prisma//answers_photos.csv'
  DELIMITER ','
  CSV HEADER;`.then(()=> {
    console.log(`finished with Photos @ ${Date.now()}`)
  }).catch(error=> console.dir(error));

}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await db.$disconnect();
    process.exit(1)
  })
