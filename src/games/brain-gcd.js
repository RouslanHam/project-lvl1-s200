import gameLogic from '../index';
import random from '../get-random';

const gameIntro = 'Find the greatest common divisor of given numbers.';
const diapasonRand = 20;
const beginRand = 1;

const tasks = () => {
  const nod = (n1, n2) => {
    if (n2 === 0) return n1;
    return nod(Math.min(n1, n2), Math.abs(n1 - n2));
  };
  const num1 = random(diapasonRand, beginRand);
  const num2 = random(diapasonRand, beginRand);
  const quiz = `${num1} ${num2}`;
  const answerCorrect = nod(num1, num2);
  const result = [quiz, answerCorrect];
  return result;
};


export default () => {
  const result = gameLogic(gameIntro, tasks);
  return result;
};
