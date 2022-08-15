import readlineSync from 'readline-sync';
import getRandom from '../src/getRandom.js';
import { roundsCount, gamersName, wrongAnswer } from '../src/index.js';

export default () => {
  console.log('brain-gcd');

  console.log('Welcome to the Brain Games!');

  const name = gamersName();

  console.log(`Hello, ${name}!`);

  let exit = false;
  let victories = 0;

  while (exit !== true) {
    const num1 = getRandom(50) + 1;
    const num2 = getRandom(50) + 1;

    const question = `${num1} ${num2}`;

    let rightAnswer = '1';
    let arr1 = [];
    let arr2 = [];

    for (
      let index1 = 1, index2 = 1;
      index1 <= num1, index2 <= num2;
      index1++, index2++
    ) {
      if (num1 % index1 === 0) {
        arr1.push(index1);
      }
      if (num2 % index2 === 0) {
        arr2.push(index2);
      }
    }

    for (let index = arr1.length - 1; index >= 0; index--) {
      if (arr2.includes(arr1[index])) {
        rightAnswer = arr1[index].toString();
        break;
      }
    }

    console.log('Find the greatest common divisor of given numbers.');

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
