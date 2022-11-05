//changes the color of the nav bar link that is currently active
const currentNavColor = () => {
  for (let i = 0; i < $(".nav").length; i++) {
    if (document.URL.includes($(".nav").eq(i).attr("href"))) {
      $(".nav").eq(i).addClass("current");
    }
  }
};

//opens nav on click of hamburgerif pixels are greater than 700
const openHamburgerNavWidth = () => {
  let num = 0;
  $(".closeNav").removeClass("hidden");
  $(".openNav").addClass("hidden");
  const slideNav = setInterval(() => {
    $(".header-container").css({ width: num + "%" });
    if (num === 15) {
      $(".header-container").children().css({
        display: "flex",
      });
      clearInterval(slideNav);
    }
    num++;
  }, 15);
};
//closes nav on click of hamburger if pixels are greater than 700
const closeHamburgerNavWidth = () => {
  let num = 15;
  $(".closeNav").addClass("hidden");
  $(".header-container").children().css({
    display: "none",
  });
  const slideNav = setInterval(() => {
    $(".header-container").css({ width: num + "%" });
    if (num === 0) {
      $(".openNav").removeClass("hidden");
      clearInterval(slideNav);
    }
    num--;
  }, 15);
};

//opens nav on click of hamburger if pixels are less than 700
const openHamburgerNavHeigth = () => {
  let num = 0;
  $(".closeNav").removeClass("hidden");
  $(".openNav").addClass("hidden");
  const slideNav = setInterval(() => {
    $(".header-container").css({ height: num + "%" });
    if (num === 50) {
      $(".header-container").children().css({
        display: "flex",
      });
      clearInterval(slideNav);
    }
    num++;
  }, 10);
};
//closes nav on click of hamburgerif pixels are less than 700
const closeHamburgerNavHeight = () => {
  let num = 50;
  $(".closeNav").addClass("hidden");
  $(".header-container").children().css({
    display: "none",
  });
  const slideNav = setInterval(() => {
    $(".header-container").css({ height: num + "%" });
    if (num === 0) {
      $(".openNav").removeClass("hidden");
      clearInterval(slideNav);
    }
    num--;
  }, 10);
};

//carousell (if that is how you spell it) for about me page.
let currentDivAbout = 2;
const nextButtonAbout = () => {
  let numOfDivs = $(".about-main-container").children().length - 1;
  $(".about-main-container")
    .children()
    .eq(currentDivAbout)
    .addClass("hidden")
    .removeClass("about-text-container");
  if (currentDivAbout < numOfDivs) {
    currentDivAbout++;
  } else {
    currentDivAbout = 2;
  }
  $(".about-main-container")
    .children()
    .eq(currentDivAbout)
    .addClass("about-text-container")
    .removeClass("hidden");
};
const previousButtonAbout = () => {
  let numOfDivs = $(".about-main-container").children().length - 1;
  $(".about-main-container")
    .children()
    .eq(currentDivAbout)
    .addClass("hidden")
    .removeClass("about-text-container");
  if (currentDivAbout > 2) {
    currentDivAbout--;
  } else {
    currentDivAbout = numOfDivs;
  }
  $(".about-main-container")
    .children()
    .eq(currentDivAbout)
    .addClass("about-text-container")
    .removeClass("hidden");
};

//carousell buttons for resume section.
let currentDivResume = 0;
const forwardButtonResume = (divContainer) => {
  let numOfDivs = $(divContainer).length - 1;
  $(divContainer).eq(currentDivResume).addClass("hidden");
  if (currentDivResume < numOfDivs) {
    currentDivResume++;
  } else {
    currentDivResume = 0;
  }
  $(divContainer).eq(currentDivResume).removeClass("hidden");
};
const backButtonResume = (divContainer) => {
  let numOfDivs = $(divContainer).length - 1;
  $(divContainer).eq(currentDivResume).addClass("hidden");
  if (currentDivResume > 0) {
    currentDivResume--;
  } else {
    currentDivResume = numOfDivs;
  }
  $(divContainer).eq(currentDivResume).removeClass("hidden");
};

const educationButtonClick = () => {
  const resumeButton = $(".resume-button-container");
  const educationContainer = $(".resume-education-container");
  const workContainer = $(".resume-work-container");
  const skillsContainer = $(".resume-skills-container");
  for (let i = 0; i < resumeButton.children().length; i++) {
    resumeButton.children().eq(i).removeClass("resume-button-style");
  }
  resumeButton.children().eq(0).addClass("resume-button-style");
  workContainer.addClass("hidden");
  skillsContainer.addClass("hidden");
  educationContainer.eq(0).removeClass("hidden");
};

const workButtonClick = () => {
  const educationContainer = $(".resume-education-container");
  const workContainer = $(".resume-work-container");
  const skillsContainer = $(".resume-skills-container");
  const resumeButton = $(".resume-button-container");
  for (let i = 0; i < resumeButton.children().length; i++) {
    resumeButton.children().eq(i).removeClass("resume-button-style");
  }
  resumeButton.children().eq(1).addClass("resume-button-style");
  educationContainer.addClass("hidden");
  skillsContainer.addClass("hidden");
  workContainer.eq(0).removeClass("hidden");
};

const skillsButtonClick = () => {
  const educationContainer = $(".resume-education-container");
  const workContainer = $(".resume-work-container");
  const skillsContainer = $(".resume-skills-container");
  const resumeButton = $(".resume-button-container");
  for (let i = 0; i < resumeButton.children().length; i++) {
    resumeButton.children().eq(i).removeClass("resume-button-style");
  }
  resumeButton.children().eq(2).addClass("resume-button-style");
  educationContainer.addClass("hidden");
  workContainer.addClass("hidden");
  skillsContainer.eq(0).removeClass("hidden");
};

const changeToDarkMode = () => {
  $(".dark-mode").addClass("hidden");
  $(".light-mode").removeClass("hidden");

  $(":root").css({
    colorScheme: "dark",
    filter: "brightness(.8) contrast(1.2)",
  });

  $(".header-container").css({
    backgroundColor: "black",
    opacity: "1",
  });
  $(".header-container").children().css({
    color: "lightblue",
  });
  $(".current").css({
    color: "white",
  });
  $(".social").css({
    backgroundColor: "black",
    color: "lightblue",
  });
  $(".portfolio-img").css({
    border: "3px solid black",
  });
  $(".aboutH2").css({
    color: "lightblue",
  });
  $(".previous-button").css({
    color: "lightblue",
  });
  $(".next-button").css({
    color: "lightblue",
  });
  $(".resume-button").css({
    color: "lightblue",
  });
  $(".back-button").css({
    color: "lightblue",
  });
  $(".forward-button").css({
    color: "lightblue",
  });
  $(".projectsH3").css({
    color: "lightblue",
  });
  $(".openNav").css({
    border: "1px solid black",
    backgroundColor: "black",
    color: "lightblue",
  });
};
const changeToLightMode = () => {
  $(".light-mode").addClass("hidden");
  $(".dark-mode").removeClass("hidden");

  $(":root").css({
    colorScheme: "",
    filter: "",
  });

  $(".header-container").css({
    backgroundColor: "",
    opacity: "",
  });
  $(".header-container").children().css({
    color: "",
  });
  $(".social").css({
    backgroundColor: "",
    color: "",
  });
  $(".portfolio-img").css({
    border: "",
  });
  $(".current").css({
    color: "",
  });
  $(".aboutH2").css({
    color: "",
  });
  $(".previous-button").css({
    color: "",
  });
  $(".next-button").css({
    color: "",
  });
  $(".resume-button").css({
    color: "",
  });
  $(".back-button").css({
    color: "",
  });
  $(".forward-button").css({
    color: "",
  });
  $(".projectsH3").css({
    color: "",
  });
  $(".openNav").css({
    border: "",
    backgroundColor: "",
    color: "",
  });
};

$(() => {
  let $aboutText = $(".about-textH1");
  let aboutNum = 0;
  let aboutString = "Hello, my name is Jacob Curry";

  const printAboutText = setInterval(() => {
    aboutNum++;
    $aboutText.text(aboutString.slice(0, aboutNum));
    if (aboutNum === aboutString.length) {
      clearInterval(printAboutText);
    }
  }, 150);

  //nav bar colors
  currentNavColor();
  //about section buttons
  $(".next-button").on("click", nextButtonAbout);
  $(".previous-button").on("click", previousButtonAbout);
  //resume section buttons click
  $(".resume-button-container")
    .children()
    .eq(0)
    .on("click", educationButtonClick);
  $(".resume-button-container").children().eq(1).on("click", workButtonClick);
  $(".resume-button-container").children().eq(2).on("click", skillsButtonClick);

  //education section back and forward buttons click
  $(".forward-button-education").on("click", () => {
    forwardButtonResume($(".resume-education-container"));
  });
  $(".back-button-education").on("click", () => {
    backButtonResume($(".resume-education-container"));
  });

  //work section back and forward buttons click
  $(".forward-button-work").on("click", () => {
    forwardButtonResume($(".resume-work-container"));
  });
  $(".back-button-work").on("click", () => {
    backButtonResume($(".resume-work-container"));
  });

  //skills section back and forward buttons click
  //commented out because there is only one div on there right now
  // $(".forward-button-skills").on("click", () => {
  //   forwardButtonResume($(".resume-skills-container"));
  // });
  // $(".back-button-skills").on("click", () => {
  //   backButtonResume($(".resume-skills-container"));
  // });

  $(document).ready(() => {
    if ($(window).width() > 700) {
      closeHamburgerNavWidth();
      if (localStorage.getItem("changeMode") === "light") {
        changeToLightMode();
      } else {
        changeToDarkMode();
      }
    } else {
      closeHamburgerNavHeight();
      if (localStorage.getItem("changeMode") === "light") {
        changeToLightMode();
      } else {
        changeToDarkMode();
      }
    }
  });

  $(window).resize(() => {
    if ($(window).width() > 700) {
      $(".header-container").css({
        width: "15%",
        height: "100vh",
      });
    } else {
      $(".header-container").css({
        width: "100%",
        height: "50%",
      });
    }
  });
  $(".openNav").on("click", () => {
    if ($(window).width() > 700) {
      openHamburgerNavWidth();
    } else {
      openHamburgerNavHeigth();
    }
  });
  $(".closeNav").on("click", () => {
    if ($(window).width() > 700) {
      closeHamburgerNavWidth();
    } else {
      closeHamburgerNavHeight();
    }
  });

  $(".light-mode").on("click", () => {
    changeToLightMode();
    localStorage.setItem("changeMode", "light");
  });
  $(".dark-mode").on("click", () => {
    changeToDarkMode();
    localStorage.setItem("changeMode", "dark");
  });
});
