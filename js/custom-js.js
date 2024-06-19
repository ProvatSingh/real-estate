function select(el) {
  return document.querySelector(el);
}

function selectAll(el) {
  return document.querySelectorAll(el);
}

// article-card hover effect

function show_Arrow_Icon(elementS) {
  if (selectAll(elementS)) {
    selectAll(elementS).forEach((element) => {
      element.querySelector("figure a").onmouseenter = () => {
        element.classList.add("hover");
      };

      element.querySelector("figure a").onmouseout = () => {
        element.classList.remove("hover");
      };

      element.querySelector(".title a").onmouseenter = () => {
        element.classList.add("hover");
      };

      element.querySelector(".title a").onmouseout = () => {
        element.classList.remove("hover");
      };
    });
  }
}

show_Arrow_Icon(".article-card");

//  masonry init
// const grid = document.querySelector(".masonry-container");

barba.hooks.enter(() => {
  show_Arrow_Icon(".article-card");
});
