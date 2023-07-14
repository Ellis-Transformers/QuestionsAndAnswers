/*
  Warnings:

  - The `date_written` column on the `Questions` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "date_written",
ADD COLUMN     "date_written" INTEGER;
