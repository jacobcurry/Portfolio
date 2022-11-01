const helloArr = ["Hello", "Hola", "Bonjour", "Hello"];
let changeHelloNum = 0;
let stringNum = 0;
let helloString = "";
const changeHello = () => {
  let stringArr = helloArr[changeHelloNum].split("");
  if (stringNum < stringArr.length) {
    helloString += stringArr[stringNum];
    $(".hello-text").text(helloString);
    stringNum++;
  } else if (changeHelloNum != helloArr.length - 1) {
    helloString = helloString.slice(0, helloString.length - 1);
    $(".hello-text").text(helloString);
  }
  if (helloString.length === 0 && changeHelloNum < helloArr.length) {
    changeHelloNum++;
    stringNum = 0;
  }
  if (changeHelloNum === helloArr.length) {
    return clearInterval(intervalId);
  }
};
const intervalId = window.setInterval(changeHello, 400);
$(() => {});
