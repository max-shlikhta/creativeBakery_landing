/* eslint-disable no-undef */
'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 640) {
      $('.page__scrollup').fadeIn();
    } else {
      $('.page__scrollup').fadeOut();
    }
  });

  $('.page__scrollup').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 0);

    return false;
  });
});
