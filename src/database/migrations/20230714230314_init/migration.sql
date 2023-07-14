/*
  Warnings:

  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_question_id_fkey";

-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_product_id_fkey";

-- AlterTable
ALTER TABLE "Answers" ADD COLUMN     "questionsId" INTEGER;

-- DropTable
DROP TABLE "Products";

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_questionsId_fkey" FOREIGN KEY ("questionsId") REFERENCES "Questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
