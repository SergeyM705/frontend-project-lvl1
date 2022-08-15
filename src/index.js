import readlineSync from 'readline-sync';

export const roundsCount = 3;

export const gamersName = () => {
  const name = readlineSync.question('May I have your name? ');

  return name;
};

export const wrongAnswer = (answer, rightAnswer, name) => {
  console.log(
    `"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}". Let's try again, ${name}!`
  );
};
