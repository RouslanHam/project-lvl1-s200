import readlineSync from 'readline-sync';

export const user = (gameIntro) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameIntro}\n`);
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!\n`);
  return nameUser;
};

export const endGame = (answer, nameUser, answerUser, answerCorrect) => {
  if (answer === true) {
    console.log(`Congratulations, ${nameUser}`);
  } else {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'.\n)`);
    console.log(`Let's try again, ${nameUser}!`);
  }
};
