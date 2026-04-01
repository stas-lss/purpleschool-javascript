const query = {
  search: "Вася",
  take: 10,
};

const urlPath = (query) => {
  let path = "";
  let i = 0;

  for (key in query) {
    path += `${key}=${query[key]}`;
    path += i < Object.keys(query).length - 1 ? "&" : "";
    i++;
  }
  return path;
};

console.log(urlPath(query));
