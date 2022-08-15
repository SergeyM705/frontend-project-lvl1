import readlineSync from 'readline-sync';
import getRandom from '../src/getRandom.js';
import { roundsCount, gamersName, wrongAnswer } from '../src/index.js';

export default () => {
  console.log('brain-even');

  console.log('Welcome to the Brain Games!');

  const name = gamersName();

  console.log(`Hello, ${name}!`);

  let exit = false;
  let victories = 0;

  while (exit !== true) {
    console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

    const question = getRandom(100);
    const isEven = question % 2 === 0;
    const rightAnswer = isEven ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if ((answer === 'yes' && isEven) || (answer === 'no') & !isEven) {
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
