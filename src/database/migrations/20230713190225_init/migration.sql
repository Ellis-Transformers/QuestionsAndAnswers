-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "product" INTEGER,
    "question_body" TEXT,
    "question_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "asker_name" TEXT,
    "question_helpfulness" INTEGER,
    "reported" BOOLEAN,
    "productsId" INTEGER,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" SERIAL NOT NULL,
    "body" TEXT,
    "answer_name" TEXT,
    "date" TEXT,
    "helpfulness" BOOLEAN,
    "questionsId" INTEGER,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photos" (
    "id" SERIAL NOT NULL,
    "photo" TEXT,
    "answersId" INTEGER,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Questions_question_helpfulness_idx" ON "Questions"("question_helpfulness");

-- CreateIndex
CREATE INDEX "Answers_helpfulness_answer_name_idx" ON "Answers"("helpfulness", "answer_name");

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_questionsId_fkey" FOREIGN KEY ("questionsId") REFERENCES "Questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_answersId_fkey" FOREIGN KEY ("answersId") REFERENCES "Answers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
