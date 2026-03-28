function result(sum, currencyIn, currencyOut) {
  const rate = `${currencyIn.toUpperCase()}_${currencyOut.toUpperCase()}`;
  const k = {
    RUB_USD: 0.03,
    USD_RUB: 33.33,
    RUB_EUR: 0.01,
    EUR_RUB: 100.0,
    USD_EUR: 0.9,
    EUR_USD: 1.11,
  };
  return k[rate] * sum || null;
}

console.log(result(1000, "RUB", "USD"));
console.log(result(1000, "USD", "RUB"));
console.log(result(1000, "eur", "rub"));
console.log(result(1000, "rub", "eur"));
console.log(result(1000, "usd", "eur"));
console.log(result(1000, "ten", "eur"));
