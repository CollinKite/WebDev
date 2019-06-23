$(document).ready(function() {
    // Transition effect for navbar
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 1) { 
          $('.navbar').addClass('solid');
          $('.navbar-left img').attr('src', 'img/logo.svg');
      } else {
          $('.navbar').removeClass('solid');
          $('.navbar-left img').attr('src', 'img/logo-alt.svg');
      }
    });
});
