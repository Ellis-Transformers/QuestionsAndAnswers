/*
  Warnings:

  - You are about to drop the column `answers_id` on the `Photos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Photos" DROP CONSTRAINT "Photos_answers_id_fkey";

-- AlterTable
ALTER TABLE "Photos" DROP COLUMN "answers_id",
ADD COLUMN     "answer_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "Answers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
