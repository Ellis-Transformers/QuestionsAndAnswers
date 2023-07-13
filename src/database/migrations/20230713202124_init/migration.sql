/*
  Warnings:

  - You are about to drop the column `answer_name` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `helpfulness` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `questionsId` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `answersId` on the `Photos` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `Photos` table. All the data in the column will be lost.
  - You are about to drop the column `product` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `productsId` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `question_body` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `question_date` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the column `question_helpfulness` on the `Questions` table. All the data in the column will be lost.
  - Made the column `reported` on table `Questions` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Answers" DROP CONSTRAINT "Answers_questionsId_fkey";

-- DropForeignKey
ALTER TABLE "Photos" DROP CONSTRAINT "Photos_answersId_fkey";

-- DropForeignKey
ALTER TABLE "Questions" DROP CONSTRAINT "Questions_productsId_fkey";

-- DropIndex
DROP INDEX "Answers_helpfulness_answer_name_idx";

-- DropIndex
DROP INDEX "Questions_question_helpfulness_idx";

-- AlterTable
ALTER TABLE "Answers" DROP COLUMN "answer_name",
DROP COLUMN "date",
DROP COLUMN "helpfulness",
DROP COLUMN "questionsId",
ADD COLUMN     "answerer_email" TEXT,
ADD COLUMN     "answerer_name" TEXT,
ADD COLUMN     "date_written" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "helpful" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "question_id" INTEGER,
ADD COLUMN     "reported" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Photos" DROP COLUMN "answersId",
DROP COLUMN "photo",
ADD COLUMN     "answers_Id" INTEGER,
ADD COLUMN     "url" TEXT;

-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "product",
DROP COLUMN "productsId",
DROP COLUMN "question_body",
DROP COLUMN "question_date",
DROP COLUMN "question_helpfulness",
ADD COLUMN     "asker_email" TEXT,
ADD COLUMN     "body" TEXT,
ADD COLUMN     "date_written" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "helpful" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "product_id" INTEGER,
ALTER COLUMN "reported" SET NOT NULL,
ALTER COLUMN "reported" SET DEFAULT false;

-- CreateIndex
CREATE INDEX "Answers_helpful_answerer_name_idx" ON "Answers"("helpful", "answerer_name");

-- CreateIndex
CREATE INDEX "Questions_helpful_idx" ON "Questions"("helpful");

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_answers_Id_fkey" FOREIGN KEY ("answers_Id") REFERENCES "Answers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
