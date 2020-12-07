$(document).ready(function (e) {
  // Add the following code if you want the name of the file appear on select
  $(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });

  /* navigation click actions */
  $(".nav-link[href='#']").on("click", function (event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID("#" + sectionID, 750);
  });

  /* scroll function */
  function scrollToID(id, speed) {
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    var navbarNav = $("#navbarNav");
    var toggleButton = $(".navbar-toggler");
    $("html,body").animate({
      scrollTop: targetOffset
    }, speed);
    if (navbarNav.hasClass("show")) {
      navbarNav.css("height", "1px").removeClass("show").addClass("collapse");
      toggleButton.addClass("collapsed").attr("aria-expanded", "false");
      navbarNav.removeClass("show");
    }
  }

  /* scrollSpy and add/remove active class */
  var sections = $("section"),
    nav = $("nav"),
    nav_height = nav.outerHeight();

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("active");
        sections.removeClass("active");

        $(this).addClass("active");
        nav.find('a[data-id="' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });



  /* Highlight current page start */

  // Get current page URL
  var url = window.location.href;

  // remove # from URL
  url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

  // remove parameters from URL
  url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

  // select file name
  url = url.substr(url.lastIndexOf("/") + 1);

  // If file name not avilable
  if (url == '') {
    url = 'index.html';
  }

  // Loop all menu items
  $('ul.navbar-nav li.nav-item').each(function () {

    // select href
    var href = $(this).find('a').attr('href');

    // Check filename
    if (url == href) {

      // Add active class
      $(this).addClass('active');
    }
  });
  /* Highlight current page close */

  /* multiNewsSliderCarousel start */
  // $("#multiNewsSliderCarousel").on("slide.bs.carousel", function (e) {
  //   var $e = $(e.relatedTarget);
  //   var idx = $e.index();
  //   var itemsPerSlide = 3;
  //   var totalItems = $("#multiNewsSliderCarousel .carousel-item").length;

  //   if (idx >= totalItems - (itemsPerSlide - 1)) {
  //     var it = itemsPerSlide - (totalItems - idx);
  //     for (var i = 0; i < it; i++) {
  //       // append slides to end
  //       if (e.direction == "left") {
  //         $("#multiNewsSliderCarousel .carousel-item")
  //           .eq(i)
  //           .appendTo(".carousel-inner");
  //       } else {
  //         $("#multiNewsSliderCarousel .carousel-item")
  //           .eq(0)
  //           .appendTo(".carousel-inner");
  //       }
  //     }
  //   }
  // });
  /* multiNewsSliderCarousel close */

  /* executive team slider start */
  // (function () {
  //   jQuery('#theCarousel').carousel();

  // }());

  // (function () {
  //   jQuery('.carousel-showmanymoveone .item').each(function () {
  //     var itemToClone = jQuery(this);

  //     for (var i = 1; i < 3; i++) {
  //       itemToClone = itemToClone.next();

  //       // wrap around if at end of item collection
  //       if (!itemToClone.length) {
  //         itemToClone = jQuery(this).siblings(':first');
  //       }

  //       // grab item, clone, add marker class, add to collection
  //       itemToClone.children(':first-child').clone()
  //         .addClass("cloneditem-" + (i))
  //         .appendTo(jQuery(this));
  //     }
  //   });
  // }());

  // (function () {
  //   jQuery('.carousel-showmanymoveone').carousel({
  //     interval: false
  //   });
  // }());
  /* executive team slider close */

  /* gallery filter button start */
  $(".filter-button").click(function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      $('.filter').show('1000');
    } else {
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');
    }

    $(".filter-button").removeClass("active");
    $(this).addClass("active");

  });
  /* gallery filter button close */

  var offset = 100;
  var duration = 550;
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > offset) {
      $(".navigation-bar").addClass("light-nav");
    } else {
      $(".navigation-bar").removeClass("light-nav");
    }
  });

  $(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, duration);
    return false;
  });
});

$(window).on("load", function () {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});