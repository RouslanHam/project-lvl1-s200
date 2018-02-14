const num1 = 100;
const num2 = 34;

const min = (n1, n2) => {
  if (n1 < n2) return n1;
  return n2;
};

const maxDiv = (n1, n2) => {
  if (n2 === 0) return n1;
  return maxDiv(min(n1, n2), Math.abs(n1 - n2));
};

const result = maxDiv(num1, num2);
console.log(result);
