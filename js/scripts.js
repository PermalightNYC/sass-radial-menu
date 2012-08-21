$(function(){
  $('.arm:nth-child(1)').click( function(){
    $(this).parent('nav').toggleClass('active');
    return false;
  });
 });