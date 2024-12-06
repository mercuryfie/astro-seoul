$(function() {
  $('.program').mouseover(function(){
    $(this).find($('.program_hover')).stop().show();
  });
  $('.program').mouseout(function(){
    $(this).find($('.program_hover')).stop().hide();
  });
})