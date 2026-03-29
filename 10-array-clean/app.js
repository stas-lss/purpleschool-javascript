const numbers = [3, 6, 9, 2];
const filterArray = (arr, fn) => {
  const resArray = [];
  for (const index in arr) {
    if (!fn(arr[index])) {
      resArray.push(arr[index]);
    }
  }
  return resArray;
};

const res = (arr) => filterArray(arr, (a) => a > 5);
console.log(res(numbers));
