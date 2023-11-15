/*
  Warnings:

  - You are about to alter the column `description` on the `Proejct` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `body` to the `Proejct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Proejct" ADD COLUMN     "body" TEXT NOT NULL,
ALTER COLUMN "description" SET DATA TYPE VARCHAR(255);
