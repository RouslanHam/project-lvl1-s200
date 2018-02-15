import gameLogic from '../index';
import random from '../get-random';

const gameIntro = 'What number is missing in this progression?';
const stepProgressRand = 10;
const positionDigitDiapason = 10;
const countNubers = 10;
const progressBeginDiapason = 10;

const tasks = () => {
  const progression = (begin, step, count) => {
    const result = [begin];
    for (let i = 1; i < count; i += 1) {
      result[i] = result[i - 1] + step;
    }
    return result;
  };

  const stepProgress = random(stepProgressRand);
  const positionDigit = random(positionDigitDiapason);
  const progressBegin = random(progressBeginDiapason);
  const progress = progression(progressBegin, stepProgress, countNubers);
  const answerCorrect = progress[positionDigit];
  progress[positionDigit] = '..';
  const quiz = `${progress.join(' ')}`;
  const result = [quiz, answerCorrect];
  return result;
};


export default () => {
  const result = gameLogic(gameIntro, tasks);
  return result;
};
