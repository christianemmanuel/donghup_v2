$(document).ready(function(){

  $('#toggle-menu').click(function() {
    $(this).toggleClass('active');
    $('.sidebar-container').toggleClass('sidebar-toggle')
  })
  
  $(window).scroll(function () {
    $('#toggle-menu').removeClass('active');
    $('.sidebar-container').removeClass('sidebar-toggle')
  });

  $('#navigation').navpoints({
    offset: 70
  });
});