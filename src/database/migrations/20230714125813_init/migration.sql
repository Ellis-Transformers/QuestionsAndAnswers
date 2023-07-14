-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER,
    "body" TEXT,
    "date_written" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "asker_name" TEXT,
    "asker_email" TEXT,
    "reported" BOOLEAN NOT NULL DEFAULT false,
    "helpful" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" SERIAL NOT NULL,
    "question_id" INTEGER,
    "body" TEXT,
    "date_written" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "answerer_name" TEXT,
    "answerer_email" TEXT,
    "reported" BOOLEAN NOT NULL DEFAULT false,
    "helpful" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photos" (
    "id" SERIAL NOT NULL,
    "answers_Id" INTEGER,
    "url" TEXT,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Questions_id_key" ON "Questions"("id");

-- CreateIndex
CREATE INDEX "Questions_helpful_idx" ON "Questions"("helpful");

-- CreateIndex
CREATE UNIQUE INDEX "Answers_id_key" ON "Answers"("id");

-- CreateIndex
CREATE INDEX "Answers_helpful_answerer_name_idx" ON "Answers"("helpful", "answerer_name");

-- CreateIndex
CREATE UNIQUE INDEX "Photos_id_key" ON "Photos"("id");

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_answers_Id_fkey" FOREIGN KEY ("answers_Id") REFERENCES "Answers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
