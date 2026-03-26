const lang = "ru";

switch (true) {
  case lang === "ru":
    console.log("Добрый день!");
    break;
  case lang === "de":
    console.log("Gutten tag!");
    break;
  case lang === "en":
    console.log("Hi!");
    break;
  default:
    console.log("I don't know your language.");
    break;
}
