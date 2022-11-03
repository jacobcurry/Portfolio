//changes the color of the nav bar link that is currently active
const currentNavColor = () => {
  for (let i = 0; i < $(".nav").length; i++) {
    if (document.URL.includes($(".nav").eq(i).attr("href"))) {
      $(".nav").eq(i).addClass("current");
    }
  }
};

//carousell (if that is how you spell it) for about me page.
let currentDivAbout = 1;
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
    currentDivAbout = 1;
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
  if (currentDivAbout > 1) {
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

$(() => {
  let $aboutText = $(".about-textH1");
  let aboutNum = 0;
  let aboutString = "Hello, my name is Jacob Curry";

  const printAboutText = setInterval(() => {
    aboutNum++;
    $aboutText.text(aboutString.slice(0, aboutNum));
    if (aboutNum === aboutString.length) {
      clearInterval(printAboutText);
      aboutNum = 0;
      setInterval(() => {
        if (aboutNum === 0) {
          $aboutText.text(aboutString + "_");
          aboutNum = 1;
        } else {
          $aboutText.text(aboutString);
          aboutNum = 0;
        }
      }, 500);
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
});
