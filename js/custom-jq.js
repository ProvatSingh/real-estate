jQuery(document).ready(function ($) {
  // ================== Dropdown

  if ($(window).width() < 1025) {
    $(function () {
      $("#myUL li.menu-item-has-children").click(function (e) {
        e.stopPropagation();
        $(this).children("ul").stop().slideToggle(400);
      });
    });
  } else {
    $("#myUL li").hover(function () {
      $(this).children("ul").stop().slideToggle(400);
    });
  }

  // ================== Search panel

  $(".cancle-icon").css("display", "none");
  $(".search-icon").click(function () {
    $(".search-form-wrapper").addClass("search-toggle");
    $("body").addClass("overflow-hidden");

    $(".cancle-icon").show();
  });

  $(".cancle-icon").click(function () {
    $(".search-form-wrapper").removeClass("search-toggle");
    $("body").removeClass("overflow-hidden");
  });








  
  // options
  // $('#container').imagesLoaded( {
  //   // options...
  //   },
  //   function() {
  //     // images have loaded
  //   }
  // );




});


// window.onload = () => {
//   alert("Hello! I am an alert daddy!");
// };
