import $ from "jquery";

export const options = ["home", "about", "portfolio", "contacts"];

export const showHome = () => {
  document.querySelector(".title-container").classList.add("show");
  document.querySelector(".role-text").classList.add("show");
  setTimeout(() => {
    document.querySelector(".cloud1").classList.add("show");
    setTimeout(() => {
      document.querySelector(".cloud2").classList.add("show");
    }, 300);
  }, 200);
};

export const scrollTop = () => {
  $("html, body").animate({
    scrollTop: 0,
  });
};

export const smoothScrollUp = (element) => {
  const index = options.indexOf(element);
  const target = options[index - 1];
  $("html, body").animate(
    {
      scrollTop: $(`.${target}`).offset().top,
    },
    800
  );
};

export const smoothScrollDown = (element) => {
  const index = options.indexOf(element);
  const target = options[index + 1];
  $("html, body").animate(
    {
      scrollTop: $(`.${target}`).offset().top,
    },
    800
  );
};

export const scrollUp = (event) => {
  try {
    const srcElement = event.event
      ? event.event.srcElement.className
      : event.target.className;
    if (options.includes(srcElement)) {
      smoothScrollUp(srcElement);
    } else {
      if (srcElement.includes("home-scroll")) {
        smoothScrollUp("home");
      }
    }
  } catch (error) {}
};

export const scrollDown = (event) => {
  try {
    const srcElement = event.event
      ? event.event.srcElement.className
      : event.target.className;
    if (options.includes(srcElement)) {
      smoothScrollDown(srcElement);
    } else {
      if (srcElement.includes("home-scroll")) {
        smoothScrollDown("home");
      }
    }
  } catch (error) {}
};
