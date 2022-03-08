$(document).ready(function(){
  $('#toggle-menu').click(function() {
    $(this).toggleClass('active');
    $('body').toggleClass('menu-toggle')
    $('#topnav').slideToggle();
  })

  $('#navigation, #topnav, #menu-contact').navScroll();

  $('.owl-carousel').owlCarousel({
    items: 1,
    margin: 10,
    autoHeight: true,
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
  });
});