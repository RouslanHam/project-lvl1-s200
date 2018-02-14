import readlineSync from 'readline-sync';
import { user, endGame } from './index';


export default () => {
  const nod = (n1, n2) => {
    if (n2 === 0) return n1;
    return nod(Math.min(n1, n2), Math.abs(n1 - n2));
  };
  const gameIntro = 'Find the greatest common divisor of given numbers.';
  const nameUser = user(gameIntro);
  let answer = true;
  let answerUser = 0;
  let answerCorrect = 0;
  const diapasonRand = 20;
  for (let i = 1; i <= 3; i += 1) {
    const num1 = Math.floor(Math.random() * diapasonRand) + 1;
    const num2 = Math.floor(Math.random() * diapasonRand) + 1;
    answerCorrect = nod(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    answerUser = readlineSync.question('Your answer: ');
    if (Number(answerUser) !== answerCorrect) {
      answer = false;
      break;
    }
    console.log('Correct!');
  }
  endGame(answer, nameUser, answerUser, answerCorrect);
};
