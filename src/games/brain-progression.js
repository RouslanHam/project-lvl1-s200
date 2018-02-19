import gameLogic from '../index';
import random from '../get-random';

const gameIntro = 'What number is missing in this progression?';
const progressBeginMax = 10;
const progressStepMax = 10;
const countNubers = 10;

const getProgression = (begin, step, position) => {
  const iter = (current, acc) => {
    if (current === countNubers) return acc;
    let newAcc = '';
    if (current === position) {
      newAcc = `${acc} ..`;
    } else {
      newAcc = `${acc} ${(step * current) + begin}`;
    }
    return iter(current + 1, newAcc);
  };
  return iter(0, '');
};

const gameData = () => {
  const progressBegin = random(progressBeginMax);
  const progressStep = random(progressStepMax);
  const position = random(countNubers);
  const quiz = getProgression(progressBegin, progressStep, position);
  const answerCorrect = progressBegin + (progressStep * position);
  return [quiz, answerCorrect];
};


export default () => {
  const result = gameLogic(gameIntro, gameData);
  return result;
};
