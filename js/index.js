let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}











/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

 (function ($) {
  'use strict';
    
  // navbarDropdown
  if ($(window).width() < 992) {
    $('.main-nav [data-toggle="dropdown"]').on('click', function () {
      $(this).siblings('.dropdown-menu').animate({
        height: 'toggle'
      }, 300);
    });
  }

  // -----------------------------
  // To Top Init
  // -----------------------------
  $('.to-top').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $(document).ready(function () {

    // -----------------------------
    //  Screenshot Slider
    // -----------------------------
    $('.speaker-slider').slick({
      slidesToShow: 3,
      centerMode: true,
      infinite: true,
      autoplay: true,
      arrows: true,
      responsive: [{
          breakpoint: 1440,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    // -----------------------------
    //  Count Down JS
    // -----------------------------
    $('.timer').syotimer({
      year: 2021,
      month: 12,
      day: 9,
      hour: 20,
      minute: 30
    });

    // -----------------------------
    // Magnific Popup
    // -----------------------------
    $('.image-popup').magnificPopup({
      type: 'image',
      removalDelay: 160, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function () {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
      closeOnContentClick: true,
      midClick: true,
      fixedContentPos: false,
      fixedBgPos: true

    });
    
    // gallery-wrapper init
    if (($('.gallery-wrapper').length) !== 0) {
      var Shuffle = window.Shuffle;
      var jQuery = window.jQuery;

      var myShuffle = new Shuffle(document.querySelector('.gallery-wrapper'), {
        itemSelector: '.gallery-item',
        buffer: 1
      });

      jQuery('input[name="gallery-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
          myShuffle.filter(input.value);
        }
      });
    }
  });

})(jQuery);






var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
