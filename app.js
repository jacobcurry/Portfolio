//change the word hello to mulitple langauges
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

//changes teh color of the nav bar link that is currently active
const currentNavColor = () => {
  for (let i = 0; i < $(".nav").length; i++) {
    if (document.URL.includes($(".nav").eq(i).attr("href"))) {
      $(".nav").eq(i).addClass("current");
    }
  }
};

//carousell (if that is how you spell it) for about me page.
let currentDiv = 1;
const nextButton = () => {
  let numOfDivs = $(".about-main-container").children().length - 1;
  $(".about-main-container")
    .children()
    .eq(currentDiv)
    .addClass("hidden")
    .removeClass("about-text-container");
  if (currentDiv < numOfDivs) {
    currentDiv++;
  } else {
    currentDiv = 1;
  }
  $(".about-main-container")
    .children()
    .eq(currentDiv)
    .addClass("about-text-container")
    .removeClass("hidden");
};
const previousButton = () => {
  let numOfDivs = $(".about-main-container").children().length - 1;
  $(".about-main-container")
    .children()
    .eq(currentDiv)
    .addClass("hidden")
    .removeClass("about-text-container");
  if (currentDiv > 1) {
    currentDiv--;
  } else {
    currentDiv = numOfDivs;
  }
  $(".about-main-container")
    .children()
    .eq(currentDiv)
    .addClass("about-text-container")
    .removeClass("hidden");
};

$(() => {
  currentNavColor();

  $(".next-button").on("click", nextButton);
  $(".previous-button").on("click", previousButton);
});
