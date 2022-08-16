/* eslint-disable import/no-mutable-exports */
import readlineSync from 'readline-sync';

const roundsCount = 3;

let victories = 0;
export let exit = false;

export const gamersName = () => {
  const name = readlineSync.question('May I have your name? ');

  return name;
};

export const checkAnswer = (answer, rightAnswer, name) => {
  if (answer === rightAnswer) {
    console.log('Correct!');
    victories += 1;

    if (victories === roundsCount) {
      console.log(`Congratulations, ${name}!`);
      exit = true;
    }
  } else {
    console.log(
      `"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}". Let's try again, ${name}!`,
    );
    exit = true;
  }
};
