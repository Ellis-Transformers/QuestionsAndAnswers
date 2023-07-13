import { PrismaClient } from "@prisma/client";
// import path = require("path");

const prisma = new PrismaClient();

async function main() {
  //Write prisma client queries here

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