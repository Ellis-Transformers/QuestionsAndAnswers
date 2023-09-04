# QuestionsAndAnswers

This is a microservice meant to serve the questions and answers section of the clarinetssdc application Which is a typical e-commerce web page

## Installation & Requirements

This project utilizes:

Typescript
Ts-Node
Express
Express-Validator
Prisma

Helpful tools included:
Nodemon
cors
Insomnia (and Postman)

## Setup

Clone to machine:

```
git clone git@github.com:Ellis-Transformers/QuestionsAndAnswers.git

```

1. clone the example.env into a '.env' file

2. Set the address of the Postgres database in the .env file:

![envScreenShot](imagesForReadMe/Screenshot%202023-09-04%20111657.png)

3. Run Prisma generate:

npm

```
npx prisma generate
```

yarn

```
ypx prisma generate
```

If you are using Git, the program is good to go. In the case that you have a need to seed the database, I would refer you to Prisma's website (https://www.prisma.io/docs/guides/migrate/seed-database) as they have very intuitive documentation.

4. deploy:

npm

```
npm run deploy
```

yarn

```
yarn deploy
```

In the case you are using docker fork the main branch of the respository and point the database address to the cloud database before creating the image
