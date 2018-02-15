import gameLogic from '../index';
import random from '../get-random';

const gameIntro = 'Answer "yes" if number even otherwise answer "no".';
const diapasonRand = 20;

const tasks = () => {
  const isEven = (num) => {
    let result = 'no';
    if (num % 2 === 0) {
      result = 'yes';
    }
    return result;
  };
  const num = random(diapasonRand);
  const quiz = `${num}`;
  const answerCorrect = isEven(num);
  const result = [quiz, answerCorrect];
  return result;
};


export default () => {
  const result = gameLogic(gameIntro, tasks);
  return result;
};
