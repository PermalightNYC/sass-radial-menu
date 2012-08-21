$(function(){
  $('.arm').click( function(){
    return false;
  });
  $('.arm:nth-child(1)').click( function(){
    $(this).parent('nav').toggleClass('active');
    return false;
  });
 });