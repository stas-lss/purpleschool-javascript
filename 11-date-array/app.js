const dates = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];
const newDates = dates
  .map((date) => {
    const arrDateDash = String(date).split("-", 3);
    const arrDateSlash = String(date).split("/", 3);
    if (arrDateDash.length === 3) {
      return parseDate(arrDateDash[0], arrDateDash[1], arrDateDash[2]) || false;
    } else if (arrDateSlash.length === 3) {
      return (
        parseDate(arrDateSlash[1], arrDateSlash[0], arrDateSlash[2]) || false
      );
    } else {
      return false;
    }
  })
  .filter((date) => date);

function parseDate(d, m, y) {
  return d <= 31 && d > 0 && m > 0 && m <= 12 ? `${d}-${m}-${y}` : false;
}

console.log(newDates);
