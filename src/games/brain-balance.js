import gameLogic from '../index';
import random from '../get-random';

const gameIntro = 'Balance the given number.';
const diapasonRand = 1000;
const beginRand = 10;

const tasks = () => {
  const balanceNum = (n) => {
    const nArray = String(n).split('');
    const nSort = nArray.sort();
    const max = nSort[nSort.length - 1];
    const min = nSort[0];
    if ((max - min) > 1) {
      nSort[nSort.length - 1] = Number(max) - 1;
      nSort[0] = Number(min) + 1;
    } else {
      return nSort.join('');
    }
    return balanceNum(nSort.join(''));
  };

  const num = random(diapasonRand, beginRand);
  const quiz = `${num}`;
  const answerCorrect = balanceNum(num);
  const result = [quiz, answerCorrect];
  return result;
};


export default () => {
  const result = gameLogic(gameIntro, tasks);
  return result;
};
