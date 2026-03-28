const crypto = (pass) => {
  const passwordHalfLength = Number(pass.length / 2).toFixed(0);
  return (
    pass.slice(0, passwordHalfLength).split("").reverse().join("") +
    pass.slice(passwordHalfLength, pass.length).split("").reverse().join("")
  );
};

const check = (cryptoPass, pass) => crypto(pass) === cryptoPass;

console.log(crypto("password"));
console.log(check("ssapdrow", "password"));
console.log(check("ssapdrow", "wrong"));
