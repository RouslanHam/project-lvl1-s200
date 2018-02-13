import readlineSync from 'readline-sync';
import user from '../index';
import { calcQuestion, calcQuestionToString, calcAnswerIsTrue, calcAnswerRight } from '../logic';


console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?\n');
const nameUser = user();

let answer = true;
let answerUser = '';
let questionI = '';

for (let i = 1; i <= 3; i += 1) {
  questionI = calcQuestion(i);
  console.log(`Question: ${calcQuestionToString(questionI)}`);
  answerUser = readlineSync.question('Your answer: ');
  if (!calcAnswerIsTrue(questionI, answerUser)) {
    answer = false;
    break;
  }
  console.log('Correct');
}

if (answer === true) {
  console.log(`Congratulations, ${nameUser}`);
} else {
  console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${calcAnswerRight(questionI)}'.\n)`);
  console.log(`Let's try again, ${nameUser}!`);
}
