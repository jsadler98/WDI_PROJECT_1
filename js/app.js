const $unicorn = $('.unicorn');

$(window).on('keydown', function(e) {
  if(e.keyCode == 37) { // when the user clicks left arrow key the unicorn moves left
    $('.unicorn').animate({'margin-left': "1px"});
  }
  else if(e.keyCode == 39) { // when the user clicks right arrow key the unicorn moves right
    $('.unicorn').animate({'margin-left': "246px"});
  }
});
