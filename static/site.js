jQuery( document ).ready( function( $ ) {
  // Your JavaScript goes here
  $('#mobile-nav-toggle').click(function(){
    if ($('#nav-mobile').hasClass('-translate-x-full')) {
      $('#nav-mobile').removeClass('-translate-x-full');
      $('#mobile-nav-toggle img').attr('src', '/wp-content/themes/wwms/static/x.svg');
    } else {
      $('#nav-mobile').addClass('-translate-x-full');
      $('#mobile-nav-toggle img').attr('src', '/wp-content/themes/wwms/static/menu.svg');
    }
  });
});

(function(){
  let themeInterval=260,themeDistance="10%";

  let fadeIn ={
    interval:themeInterval,
    opacity:0
  };

  ScrollReveal().reveal('.reveal--fade-in' , fadeIn);
})();