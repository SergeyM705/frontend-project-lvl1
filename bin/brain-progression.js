import readlineSync from 'readline-sync';
import getRandom from '../src/getRandom.js';
import { gamersName, checkAnswer, exit } from '../src/index.js';

export default () => {
  console.log('brain-progression');

  console.log('Welcome to the Brain Games!');

  const name = gamersName();

  console.log(`Hello, ${name}!`);

  while (exit !== true) {
    const start = getRandom(20);
    const step = getRandom(5) + 1;
    const positionToHide = getRandom(10);

    let question = start.toString();

    for (let i = 1; i < 10; i += 1) {
      question = `${question} ${(start + step * i).toString()}`;
    }

    question = question.split(' ');
    const rightAnswer = question[positionToHide];
    question[positionToHide] = '..';
    question = question.join(' ');

    console.log('What number is missing in the progression?');

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    checkAnswer(answer, rightAnswer, name);
  }
};
