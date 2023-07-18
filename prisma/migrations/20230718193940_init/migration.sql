-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER,
    "body" TEXT,
    "date_written" BIGINT,
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
    "date_written" BIGINT,
    "answerer_name" TEXT,
    "answerer_email" TEXT,
    "reported" BOOLEAN NOT NULL DEFAULT false,
    "helpful" INTEGER NOT NULL DEFAULT 0,
    "questionsId" INTEGER,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photos" (
    "id" SERIAL NOT NULL,
    "answer_id" INTEGER,
    "url" TEXT,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

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
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_questionsId_fkey" FOREIGN KEY ("questionsId") REFERENCES "Questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "Answers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
