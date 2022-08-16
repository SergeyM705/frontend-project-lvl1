import readlineSync from 'readline-sync';
import getRandom from '../src/getRandom.js';
import { gamersName, checkAnswer, exit } from '../src/index.js';

export default () => {
  console.log('brain-even');

  console.log('Welcome to the Brain Games!');

  const name = gamersName();

  console.log(`Hello, ${name}!`);

  while (exit !== true) {
    console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

    const question = getRandom(100);
    const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    checkAnswer(answer, rightAnswer, name);
  }
};
