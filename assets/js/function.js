$(document).ready(function (e) {

  /* launch date countdown start */
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let launchDate = "Jan 30, 2024 00:00:00",
      countDown = new Date(launchDate).getTime(),
      x = setInterval(function () {

        let now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        
        document.getElementById("day").innerText = Math.floor(distance / (day)),
        document.getElementById("hrs").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("min").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("sec").innerText = Math.floor((distance % (minute)) / second);

        //seconds
      }, 0)
  }());
  /* launch date countdown close */

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