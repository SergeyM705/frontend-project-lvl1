import readlineSync from 'readline-sync';
import getRandom from '../src/getRandom.js';
import { gamersName, checkAnswer, exit } from '../src/index.js';

export default () => {
  console.log('brain-prime');

  console.log('Welcome to the Brain Games!');

  const name = gamersName();

  console.log(`Hello, ${name}!`);

  const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];

  while (exit !== true) {
    console.log(
      'Answer "yes" if given number is prime. Otherwise answer "no".',
    );
    const question = getRandom(25);
    const rightAnswer = primeNumbers.includes(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    checkAnswer(answer, rightAnswer, name);
  }
};
