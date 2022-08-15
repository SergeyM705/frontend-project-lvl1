import readlineSync, { questionNewPassword } from 'readline-sync';
import getRandom from '../src/getRandom.js';
import { roundsCount, gamersName, wrongAnswer } from '../src/index.js';

export default () => {
  console.log('brain-progression');

  console.log('Welcome to the Brain Games!');

  const name = gamersName();

  console.log(`Hello, ${name}!`);

  let exit = false;
  let victories = 0;

  while (exit !== true) {
    const start = getRandom(20);
    const step = getRandom(5);
    const positionToHide = getRandom(10);

    let question = start.toString();

    for (let i = 1; i < 10; i++) {
      question = `${question} ${(start + step * i).toString()}`;
    }

    question = question.split(' ');
    let rightAnswer = question[positionToHide];
    question[positionToHide] = '..';

    console.log('What number is missing in the progression?');

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
      victories++;

      if (victories === roundsCount) {
        console.log(`Congratulations, ${name}!`);
        exit = true;
      }
    } else {
      wrongAnswer(answer, rightAnswer, name);
      exit = true;
    }
  }
};
