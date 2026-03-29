numbers = [1, 40, -5, 10, 0];
const sortArr = (arr, order) => {
  order = order.toUpperCase();
  const oper = {
    DESC: (a, b) => a > b,
    ASC: (a, b) => a < b,
  };
  const arrMod = {
    DESC: (a, b) => arr.splice(b, 0, arr.splice(a, 1)[0]),
    ASC: (a, b) => arr.splice(b, 0, arr.splice(a, 1)[0]),
  };
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (oper[order](arr[i], arr[j])) {
        arrMod[order](i, j);
      }
    }
  }
};
sortArr(numbers, "desc");
console.log(numbers);

sortArr(numbers, "asc");
console.log(numbers);
