-- CreateTable
CREATE TABLE "Proejct" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnail" TEXT,
    "screenShoot" TEXT[],

    CONSTRAINT "Proejct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Proejct_name_key" ON "Proejct"("name");
