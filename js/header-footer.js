// = = = = = = = = = = HEADER END = = = = = = = = = =
// ==== header responsive Start

const hamburger = document.getElementById("hamburger_menu");
hamburger.addEventListener("click", function () {
  var element1 = document.getElementById("collapse_menu");
  var element2 = document.getElementById("menu_overlay");
  var element3 = document.getElementById("body");
  element1.classList.toggle("collapse-menu-open");
  element2.classList.toggle("collapse-overlay");
  element3.classList.toggle("overflow-hidden");
});

// Menu Overlay Click Js //

const menuoverlay = document.getElementById("menu_overlay");
menuoverlay.addEventListener("click", function () {
  var element4 = document.getElementById("collapse_menu");
  var element5 = document.getElementById("menu_overlay");
  var element6 = document.getElementById("body");
  element4.classList.toggle("collapse-menu-open");
  element5.classList.toggle("collapse-overlay");
  element6.classList.toggle("overflow-hidden");
});

// Menu Close Click Js //

const menuclose = document.getElementById("colapse_close");
menuclose.addEventListener("click", function () {
  var element7 = document.getElementById("collapse_menu");
  var element8 = document.getElementById("menu_overlay");
  var element9 = document.getElementById("body");
  element7.classList.toggle("collapse-menu-open");
  element8.classList.toggle("collapse-overlay");
  element9.classList.toggle("overflow-hidden");
});

// ==== header responsive End

// ==== header background color Start
const header = document.querySelector(".header");

function headerAnimtion(startPosition) {
  let bgDark = document.querySelectorAll(".bg-dark");
  let bgLight = document.querySelectorAll(".bg-light");
  var fst_Section = document.querySelector(".main-wrapper").firstElementChild;

  fst_Section.classList.contains("bg-light")
    ? header.classList.add("bg-light")
    : header.classList.add("bg-dark");

  scroller.on("scroll", function (scrollEvent) {
    const scrollY = scrollEvent.scroll.y;
    if (window.innerWidth > 1200) {
      if (scrollY > 100) {
        // Add the 'fixed' class to the header
        header.classList.add("header-fixed");
      } else {
        header.classList.remove("header-fixed");
      }
    } else {
      if (scrollY > 70) {
        header.classList.add("header-fixed");
      } else {
        header.classList.remove("header-fixed");
      }
    }
  });

  bgDark.forEach((elbgDark) => {
    gsap.to(header, {
      scrollTrigger: {
        scroller: document.querySelector(".scroll-container"),
        trigger: elbgDark,
        start: `top ${startPosition}`,
        end: `bottom ${startPosition}`,
        // markers:true,
        invalidateOnRefresh: true,

        onEnter: (self) => {
          header.classList.add("bg-dark");
          header.classList.remove("bg-light");
        },

        onEnterBack: (self) => {
          header.classList.add("bg-dark");
          header.classList.remove("bg-light");
        },
      },
    });
  });

  bgLight.forEach((elbgLight) => {
    gsap.to(header, {
      scrollTrigger: {
        scroller: document.querySelector(".scroll-container"),
        trigger: elbgLight,
        start: `top ${startPosition}`,
        end: `bottom ${startPosition}`,
        invalidateOnRefresh: true,

        onEnter: (self) => {
          header.classList.add("bg-light");
          header.classList.remove("bg-dark");
        },

        onEnterBack: (self) => {
          header.classList.add("bg-light");
          header.classList.remove("bg-dark");
        },
      },
    });
  });
}


imagesLoaded(main_Wrapper).on("done", function (instance) {
  select(".main-wrapper").children[0].classList.add("first-section");
  headerAnimtion("94px");
});

barba.hooks.leave(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  body.classList.remove("overflow-hidden");
  select(".collapse-menu").classList.remove("collapse-menu-open");
  select(".menu-overlay").classList.remove("collapse-overlay");
  setTimeout(() => {
    header.classList.remove("header-fixed", "bg-light", "bg-dark");
  }, 1);
});

barba.hooks.enter((data) => {
  // with out settimeout noet working currectly
  imagesLoaded(
    data.next.container,
    { background: true },
    function () {
    setTimeout(() => {
      headerAnimtion("94px");
      select(".main-wrapper").children[0].classList.add("first-section");
    }, 2);
  });
});

// Initial check window resize
window.addEventListener("resize", function () {
  // All Function Called again
  header.classList.remove("header-fixed", "bg-light", "bg-dark");
  headerAnimtion("94px");
});

// ========= header background change End =========

//  = = = = = = = = = = HEADER END = = = = = = = = = =
