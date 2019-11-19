/*
  * implement sentry code
*/
Sentry.init({ dsn: 'https://925e78a8b0e146a2ab966e39391b993a@sentry.io/1764102' });
/*
  * create configuration material elements
*/
$(document).ready(function(){
  // import modal materializecss
  $('.modal').modal();
  // import sidenav materializecss
  $('.sidenav').sidenav();
  // import scrollspy materializecss
  $('.scrollspy').scrollSpy();
  // import slickjs for principal slider
  $('.single-item').slick({
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  });
  // import slickjs for testimonial slider
  $('.testimonial-item').slick({
    dots: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear'
  });
});
// create scroll effect in navbar
$(document).ready(function(){
  var flag = false;
  var scroll;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 20){
      // this is execute when scroll down
      if(!flag){
        $(".c-navbar").addClass("c-navbar--scrolling");
        flag = true;
      }
    }else{
      // this is execute when scroll up
      if(flag){
        $(".c-navbar").removeClass("c-navbar--scrolling");
        flag = false;
      }
    }
  });
});