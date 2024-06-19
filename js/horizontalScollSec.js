let horizontalScroll_Section;

function horizontalScollSec() {
  const horizontalSections = document.querySelectorAll(".horizontal-scroll");
  horizontalSections.forEach((horizontalSection) => {
    const pinWrap = horizontalSection.querySelector(".pin-wrap");
    if (pinWrap) {
      // Update pinWrapWidth and horizontalScrollLength
      const pinWrapWidth = pinWrap.offsetWidth;
      const horizontalScrollLength = pinWrapWidth - window.innerWidth;

      // Create or recreate the ScrollTrigger instance
      gsap.to(pinWrap, {
        scrollTrigger: {
          scroller: document.querySelector(".scroll-container"),
          trigger: horizontalSection,
          invalidateOnRefresh: true,
          id: "horizontalScroll_Section1",
          scrub: true,
          pin: true,
          start: "top top",
          end: () => `+=${pinWrapWidth}`,
        },
        x: -horizontalScrollLength,
        ease: "none",
      });

      gsap.to(pinWrap, {
        scrollTrigger: {
          scroller: document.querySelector(".scroll-container"),
          trigger: horizontalSection,
          invalidateOnRefresh: true,
          start: "bottom top",
          onEnterBack: (self) => {
            // header.classList.add("bg-dark");
            if (document.querySelector(".pin-spacer")) {
              let pin_Spacer =
                document.querySelector(".pin-spacer").firstElementChild;
              if (pin_Spacer.classList.contains("bg-dark")) {
                header.classList.add("bg-dark");
                header.classList.remove("bg-light");
              } else if (pin_Spacer.classList.contains("bg-light")) {
                header.classList.remove("bg-dark");
                header.classList.add("bg-light");
              }
            }
          },
        },
      });

      if (window.innerWidth > 1200) {
        ScrollTrigger.getById("horizontalScroll_Section1").enable();
      } else {
        ScrollTrigger.getById("horizontalScroll_Section1").disable();
      }
    }
  });
}
imagesLoaded(main_Wrapper).on("done", function (instance) {
  horizontalScollSec();
});
barba.hooks.leave(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  console.log("killed");
});
barba.hooks.enter(() => {
  imagesLoaded(main_Wrapper).on("done", function (instance) {
    setTimeout(() => {
      horizontalScollSec();
      
    },1);
  });
  console.log("horizontalScollSec");
});
// Initial check window resize
window.addEventListener("resize", function () {
  // All Function Called again
  ScrollTrigger.getAll().forEach((t) => t.kill());
  horizontalScollSec();
});

// var prevScrollY = 0; // Variable to store the previous scroll position

// scroller.on("scroll", function(scrollArgs) {
//     var currentScrollY = scrollArgs.scroll.y;
//     var viewportTop = currentScrollY;
//     var viewportBottom = viewportTop + window.innerHeight;

//     var div = document.querySelector(".horizontal-scroll");
//     var divRect = div.getBoundingClientRect();
//     var divBottom = divRect.bottom + currentScrollY; // Adjusted for Locomotive Scroll's scroll position

//     if (currentScrollY < prevScrollY) { // Check if scrolling up
//         if (divBottom >= viewportTop && divBottom <= viewportBottom) {
//             console.log('Div bottom touches viewport top while scrolling up.');
//             // Your continuous action here
//         }
//     }

//     prevScrollY = currentScrollY; // Update the previous scroll position
// });
