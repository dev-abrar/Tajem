$(function () {

  // menu fix
  var menu = $('.navbar').offset().top;
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();

    if (menu < scroll) {
      $('.navbar').addClass('menu_fix');
    } else {
      $('.navbar').removeClass('menu_fix');
    }
  });

  // bt top
  $('.bt_top').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 1500);
  });

  $(window).scroll(function () {
    var abc = $(this).scrollTop();

    if (abc > 100) {
      $('.bt_top').fadeIn();
    } else {
      $('.bt_top').fadeOut();
    }
  });

  // banner slider
  $('.main_banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    dots: true,
  });

  // team slider
  $('.main_team').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  });

  // testimonial slider
  $('.main_test').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });

  $('.show').on('click', function () {
    $('.main_menu').css('left', '0');
  });
  $('.hide').on('click', function () {
    $('.main_menu').css('left', '-100%');
  });
})
var containerEl = document.querySelector('.work_row');

var mixer = mixitup(containerEl);

// cursor 
$(window).mousemove(function (e) {

  $('.cursor').css({
    left: e.pageX,
    top: e.pageY
  })

})

// scrollspy-js
//scroll-spy & Smooth-scrolling

var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 40
  }, 1000);
});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionhead = $(this.hash).offset().top - 80;
    if (scrollTop >= sectionhead) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});

// wow js
wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0, // default
  mobile: true, // default
  live: true // default
})
wow.init();
