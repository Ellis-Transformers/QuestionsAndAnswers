/*
  Warnings:

  - You are about to drop the column `answers_Id` on the `Photos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Photos" DROP CONSTRAINT "Photos_answers_Id_fkey";

-- AlterTable
ALTER TABLE "Photos" DROP COLUMN "answers_Id",
ADD COLUMN     "answers_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_answers_id_fkey" FOREIGN KEY ("answers_id") REFERENCES "Answers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
