import gameLogic from '../logic-calc';

const gameIntro = 'What is the result of the expression?';
const diapasonRand = 20;
const expression = ['+', '-', '*'];

const tasks = (i) => {
  const num1 = Math.floor(Math.random() * diapasonRand);
  const num2 = Math.floor(Math.random() * diapasonRand);
  const operator = expression[i];
  const quiz = `${num1} ${operator} ${num2}`;
  let answerCorrect = 0;
  if (operator === '+') answerCorrect = num1 + num2;
  if (operator === '-') answerCorrect = num1 - num2;
  if (operator === '*') answerCorrect = num1 * num2;
  const result = [quiz, answerCorrect];
  return result;
};


export default () => {
  const result = gameLogic(gameIntro, tasks);
  return result;
};
