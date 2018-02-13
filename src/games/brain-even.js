import readlineSync from 'readline-sync';
import user from '../index';

function isEven(num) {
  let result = 'no';
  if (num % 2 === 0) {
    result = 'yes';
  }
  return result;
}

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');
const nameUser = user();
let answer = true;
let answerUser = '';
let answerCorrect = '';
const diapasonRand = 100;
for (let i = 1; i < 4; i += 1) {
  const num = Math.floor(Math.random() * diapasonRand);
  answerCorrect = isEven(num);
  console.log(`Question: ${num}`);
  answerUser = readlineSync.question('Your answer: ');
  if (answerUser !== answerCorrect) {
    answer = false;
    break;
  }
  console.log('Correct!');
}

if (answer === true) {
  console.log(`Congratulations, ${nameUser}`);
} else {
  console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'.\n)`);
  console.log(`Let's try again, ${nameUser}!`);
}
