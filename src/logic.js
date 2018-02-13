export const calcQuestion = (iter) => {
  const diapasonRand = 10;
  const num1 = Math.floor(Math.random() * diapasonRand);
  const num2 = Math.floor(Math.random() * diapasonRand);

  let result = 0;
  let toString = '';
  switch (iter) {
    case 1:
      result = num1 + num2;
      toString = `${num1} + ${num2}`;
      break;
    case 2:
      result = num1 - num2;
      toString = `${num1} - ${num2}`;
      break;
    case 3:
      result = num1 * num2;
      toString = `${num1} * ${num2}`;
      break;
    default:
      result = 0;
  }
  const question = (message) => {
    switch (message) {
      case 'toString':
        return toString;
      case 'rightAnswer':
        return result;
      default:
        return 'unknow message';
    }
  };
  return question;
};

export const calcQuestionToString = (question) => {
  const result = question('toString');
  return result;
};

export const calcAnswerRight = (question) => {
  const result = question('rightAnswer');
  return result;
};

export const calcAnswerIsTrue = (question, answer) => {
  const answerRight = calcAnswerRight(question);
  return Number(answer) === Number(answerRight);
};
