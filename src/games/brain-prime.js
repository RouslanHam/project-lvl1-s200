import gameLogic from '../index';
import random from '../get-random';

const gameIntro = 'Is this number prime? Answer "yes" or "no")';
const diapasonRand = 100;

const isPrime = (n) => {
  const iter = (num, divisor) => {
    if (num % divisor === 0) return 'no';
    if (divisor > num / 2) return 'yes';
    return iter(num, divisor + 1);
  };
  return iter(n, 2);
};

const gameData = () => {
  const num = random(diapasonRand);
  const quiz = `${num}`;
  const answerCorrect = isPrime(num);
  const result = [quiz, answerCorrect];
  return result;
};


export default () => {
  const result = gameLogic(gameIntro, gameData);
  return result;
};
