/*
  Warnings:

  - The primary key for the `TagOnProject` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Proejct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TagOnProject" DROP CONSTRAINT "TagOnProject_projectId_fkey";

-- AlterTable
ALTER TABLE "TagOnProject" DROP CONSTRAINT "TagOnProject_pkey",
ALTER COLUMN "projectId" SET DATA TYPE TEXT,
ADD CONSTRAINT "TagOnProject_pkey" PRIMARY KEY ("projectId", "tagId");

-- DropTable
DROP TABLE "Proejct";

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "body" TEXT NOT NULL,
    "thumbnail" TEXT,
    "screenShoot" TEXT[],
    "github_url" TEXT,
    "demo_url" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");

-- CreateIndex
CREATE INDEX "Project_name_idx" ON "Project"("name");

-- AddForeignKey
ALTER TABLE "TagOnProject" ADD CONSTRAINT "TagOnProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
