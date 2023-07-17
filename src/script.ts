import prisma from "./seed";

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