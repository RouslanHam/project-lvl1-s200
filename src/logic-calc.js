import readlineSync from 'readline-sync';
import user from './index';


export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const nameUser = user();
  let answer = true;
  let answerUser = 0;
  let answerCorrect = 0;
  const diapasonRand = 20;
  const numSum1 = Math.floor(Math.random() * diapasonRand);
  const numSum2 = Math.floor(Math.random() * diapasonRand);
  answerCorrect = numSum1 + numSum2;
  console.log(`Question: ${numSum1} + ${numSum2}`);
  answerUser = readlineSync.question('Your answer: ');
  if (Number(answerUser) !== answerCorrect) {
    answer = false;
  }
  if (answer === true) {
    console.log('Correct!');
    const numMinus1 = Math.floor(Math.random() * diapasonRand);
    const numMinus2 = Math.floor(Math.random() * diapasonRand);
    answerCorrect = numMinus1 - numMinus2;
    console.log(`Question: ${numMinus1} - ${numMinus2}`);
    answerUser = readlineSync.question('Your answer: ');
    if (Number(answerUser) !== answerCorrect) {
      answer = false;
    }
  }
  if (answer === true) {
    console.log('Correct!');
    const numMulti1 = Math.floor(Math.random() * diapasonRand);
    const numMulti2 = Math.floor(Math.random() * diapasonRand);
    answerCorrect = numMulti1 * numMulti2;
    console.log(`Question: ${numMulti1} * ${numMulti2}`);
    answerUser = readlineSync.question('Your answer: ');
    if (Number(answerUser) !== answerCorrect) {
      answer = false;
    }
  }

  if (answer === true) {
    console.log(`Congratulations, ${nameUser}`);
  } else {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'.\n)`);
    console.log(`Let's try again, ${nameUser}!`);
  }
};
