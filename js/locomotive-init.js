gsap.registerPlugin(ScrollTrigger);
var main_Wrapper = document.querySelector(".main-wrapper");

// locomotive int start
let scroller;
function locoscroll(scrollerSpeed) {
  scroller = new LocomotiveScroll({
    el: document.querySelector(".scroll-container"),
    smooth: true,
    multiplier: scrollerSpeed,
    getDirection: true,
    reloadOnContextChange: true,
    lerp: 0.1,
    touchMultiplier: 2,
    mobile: {
      breakpoint: 0,
      smooth: true,
    },
    tablet: {
      breakpoint: 0,
      smooth: true,
    },
  });
  // window.onresize = scroll.update();
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  scroller.on("scroll", ScrollTrigger.update);

  scroller.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
  });

  //  // tell ScrollTrigger to use these proxy methods for the "[data-scroll-container]" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".scroll-container", {
    scrollTop(value) {
      return arguments.length
        ? scroller.scrollTo(value, { duration: 0, disableLerp: true })
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".scroll-container").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => scroller.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

  // ========== update ScrollTrigger ***** IMPORTANT *****

  new ResizeObserver(() => scroller.update()).observe(
    document.querySelector(".scroll-container")
  );
}

var msnry;
imagesLoaded(main_Wrapper).on("done", function (instance) {
  if (window.innerWidth > 1200) {
    locoscroll(1);
  } else {
    locoscroll(1.5);
  }
});

function about_masenary() {
  if (document.querySelector(".masonry-container")) {
    msnry = new Masonry(document.querySelector(".masonry-container"), {
      itemSelector: ".col",
      percentPosition: true,
    });
  }
}
about_masenary();
// locomotive int end

// locomotive int in barba start

// barba.init({
//   sync: true,
//   transitions: [
//     {
//       // name: 'default-transition',
//       leave(data) {
//         const done = this.async();
//         // Animation for leaving the page (optional)
//         loaderWrapper.style = "transform:scaleY(1)";

//         scroller.destroy();
//         if (document.querySelector(".masonry-container")) {
//           msnry.destroy();
//         }
//         done();
//       },
//       enter(data) {
//         const done = this.async();
//         imagesLoaded(main_Wrapper).on("done", function (instance) {
//           setTimeout(() => {
//             if (document.querySelector(".masonry-container")) {
//               about_masenary();
//               done();
//             }
//           }, 500);
//         });
//       },

//       afterEnter(data) {
//         imagesLoaded(main_Wrapper).on("done", function (instance) {
//           setTimeout(() => {
//             about_masenary();
//           }, 500);
//         });
//         if (window.innerWidth > 1200) {
//           locoscroll(1);
//         } else {
//           locoscroll(1.8);
//         }
//         setTimeout(() => {
//           loaderWrapper.style = "transform:scaleY(0)";
//         }, 1000);
//       },
//     },
//   ],
// });

document.addEventListener("DOMContentLoaded", function () {
  barba.init({
    transitions: [
      {
        name: "default-transition",
        leave(data) {
          return new Promise((resolve) => {
            scroller.destroy();
            gsap.to(loaderWrapper, {
              height: "100vh",
              top: "auto",
              bottom: "0",
              onComplete:resolve,
              
            });
           
          });
        },
        enter(data) {
          return new Promise((resolve) => {
            if (window.innerWidth > 1200) {
              locoscroll(1);
            } else {
              locoscroll(1.8);
            }
            imagesLoaded(
              data.next.container,
              { background: true },
              function () {
                if (document.querySelector(".masonry-container")) {
                  msnry = new Masonry(
                    document.querySelector(".masonry-container"),
                    {
                      itemSelector: ".col",
                      percentPosition: true,
                    }
                  );
                }
                resolve();
                gsap.to(loaderWrapper, {
                  height: "0",
                  delay:0.8, 
                 
                  onComplete: function () {
                    gsap.to(loaderWrapper, {
                      top: "0",
                      bottom: "auto",
                    });
                   
                  },
                });
              
                
              }
            );
          });
        },
      },
    ],
  });
});

// Initial check window resize
window.addEventListener("resize", function () {
  scroller.destroy();
  if (document.querySelector(".masonry-container")) {
    msnry.destroy();
  }
  ScrollTrigger.getAll().forEach((t) => t.kill()); // **** KILL ALL ScrollTrigger ANIMTION ON RESIZE **** //
  about_masenary();
  if (window.innerWidth > 1200) {
    locoscroll(1);
  } else {
    locoscroll(1.8);
  }
});

// ================================
var startTime = performance.now();
let loaderWrapper = document.querySelector(".loader-wrapper");
let counter = 1;
var endTime;
var loadingTime;
window.addEventListener("load", function () {
  imagesLoaded(main_Wrapper).on("done", function (instance) {
    endTime = performance.now();
    loadingTime = endTime - startTime;
    console.log("onload: " + loadingTime + " milliseconds");

    const interval = setInterval(() => {
      loaderWrapper.querySelector("h2 span").innerHTML = counter;
      counter++;

      if (counter > 100) {
        clearInterval(interval); // Stop the interval when counter reaches 10
        setTimeout(() => {
          loaderWrapper.querySelector("h2").style =
            "transform:scaleY(0); opacity:0;";
        }, 200); // Hide loader wrapper after the delay
        setTimeout(() => {
          gsap.to(loaderWrapper, {
            height: 0,
          });
        }, 500); // Hide loader wrapper after the delay
      }
    }, loadingTime / 100);
  });
});


