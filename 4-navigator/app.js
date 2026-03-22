const addressLat = 10; // адрес назначения lat (например: 10)
const addressLong = 20; // адрес назначения long
const positionLat = 2; // текущее положение пользователя lat
const positionLong = 2; // текущее положение пользователя long

let distance =
  ((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2) ** 0.5;
console.log(
  `Дистанция от текущего местоположения пользователя до желаемой точки: ${Number(distance).toFixed(2)}`,
);
