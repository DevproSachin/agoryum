$(document).ready(function(){
  $('.navbar-nav li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});
