const crypto = (pass) => {
  const [...a] = pass.split("");
  return [a[3], a[2], a[1], a[0], a[7], a[5], a[6], a[4]].join("");
};

const check = (cryptoPass, pass) => crypto(pass) === cryptoPass;
console.log(crypto("password"));
console.log(check("ssapdorw", "password"));
console.log(check("ssapdorw", "wrong"));
