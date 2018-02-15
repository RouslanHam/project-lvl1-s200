import readlineSync from 'readline-sync';

export default (gameIntro, tasks) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameIntro}\n`);
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!\n`);
  let answer = true;
  let answerUser = 0;
  let answerCorrect = [];
  for (let i = 0; i <= 2; i += 1) {
    answer = true;
    const task = tasks(i);
    if (task === null) {
      return;
    }
    const question = task[0];
    [, answerCorrect] = task;
    console.log(`Question: ${question}`);
    answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== String(answerCorrect)) {
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
};
