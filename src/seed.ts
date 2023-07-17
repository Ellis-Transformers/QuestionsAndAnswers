import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const path = (__dirname + "/src/database/")
async function main() {
  //Write prisma client queries here

  console.log(`seeding started @ ${Date.now()}`)

  await prisma.$executeRaw `COPY "Questions"("id", "product_id", "body", "date_written", "asker_name", "asker_email", "reported", "helpful")
  FROM '${path}/QuestionsAndAnswers/src/database/questions.csv'
  DELIMITER ','
  CSV HEADER;`
  .then(()=> {
    console.log(`finished with Questions @ ${Date.now()}`)
  })
  .catch(error=> console.dir(error));


  await prisma.$executeRaw `COPY "Answers"("id", "question_id", "body", "date_written", "answerer_name", "answerer_email", "reported", "helpful")
  FROM '${path}answers.csv'
  DELIMITER ','
  CSV HEADER;`
  .then(()=> {
    console.log(`finished with Answers @ ${Date.now()}`)
  })
  .catch(error=> console.dir(error));


  await prisma.$executeRaw `COPY "Photos"("id", "answer_id", "url")
  FROM '${path}answers_photos.csv'
  DELIMITER ','
  CSV HEADER;`.then(()=> {
    console.log(`finished with Photos @ ${Date.now()}`)
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
export default prisma