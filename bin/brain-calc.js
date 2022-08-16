import readlineSync from 'readline-sync';
import getRandom from '../src/getRandom.js';
import { gamersName, checkAnswer, exit } from '../src/index.js';

export default () => {
  console.log('brain-calc');

  console.log('Welcome to the Brain Games!');

  const name = gamersName();

  console.log(`Hello, ${name}!`);

  const signOperation = ['+', '-', '*'];

  while (exit !== true) {
    const num1 = getRandom(10);
    const num2 = getRandom(10);
    const sign = signOperation[getRandom(3)];
    const question = `${num1} ${sign} ${num2}`;

    let rightAnswer = '0';

    switch (sign) {
      case '+':
        rightAnswer = num1 + num2;
        break;
      case '-':
        rightAnswer = num1 - num2;
        break;
      case '*':
        rightAnswer = num1 * num2;
        break;
      default:
        break;
    }

    console.log('What is the result of the expression?');

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    checkAnswer(answer, rightAnswer.toString(), name);
  }
};
