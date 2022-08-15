import readlineSync from 'readline-sync';
import getRandom from '../src/getRandom.js';
import { roundsCount, gamersName, wrongAnswer } from '../src/index.js';

export default () => {
  console.log('brain-calc');

  console.log('Welcome to the Brain Games!');

  const name = gamersName();

  console.log(`Hello, ${name}!`);

  let exit = false;
  let victories = 0;
  const signOperation = ['+', '-', '*'];

  while (exit !== true) {
    const num1 = getRandom(10);
    const num2 = getRandom(10);
    const sign = signOperation[getRandom(3)];
    const question = `${num1} ${sign} ${num2}`;

    let rightAnswer = "0";

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

    if (answer === rightAnswer.toString()) {
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
