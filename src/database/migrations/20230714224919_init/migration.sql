/*
  Warnings:

  - The `date_written` column on the `Answers` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Answers" DROP COLUMN "date_written",
ADD COLUMN     "date_written" INTEGER;
