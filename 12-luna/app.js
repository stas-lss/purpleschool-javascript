const invalidCard = "4561-2612-1234-5464";
const validCard = "4561-2612-1234-5467";

const luna = (cardNumber) => {
  const fullCardNumber = cardNumber.replaceAll("-", "");
  if (isNaN(fullCardNumber) || fullCardNumber.length < 16) {
    return false;
  }
  const resultSum = fullCardNumber
    .split("")
    .map((n, i) => {
      if (i % 2 === 0) {
        return n * 2 > 9 ? n * 2 - 9 : n * 2;
      } else return +n;
    })
    .reduce((sum, el) => (sum = el += sum), 0);

  return resultSum % 10 === 0 ? true : false;
};

console.log(luna(invalidCard));
console.log(luna(validCard));
