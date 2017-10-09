const $unicorn = $('.unicorn');

$(window).on('keydown', function(e) {
  if(e.keyCode == 37) { // when the user clicks left arrow key the unicorn moves left
    $('.unicorn').animate({'left': '1px'});
  }
  else if(e.keyCode == 39) { // when the user clicks right arrow key the unicorn moves right
    $('.unicorn').animate({'left': '246px'});
  }
});


// $(() => {
//   const $unicorn = $('.unicorn');
//   const unicornPosition = $unicorn.position().left
//
//   function moveUnicorn(){
//     $(window).on('keydown', function(e) {
//       // if ($unicornPosition > 0 && $unicornPosition < 250) {
//
//       if (unicornPosition > 0  && unicornPosition <500 ) {
//         if(e.keyCode == 37) {
//         $unicorn.animate({'margin-left': '-=90px'});
//         }else if (e.keyCode == 39) { // when the user clicks right arrow key the unicorn moves right
//           $unicorn.animate({'margin-left': '+=90px'});
//           console.log(unicornPosition);
//         }
//       }
//
//     });
//   }
//
//   $(window).on('keyup', function() {
//     $('.unicorn').stop();
//   });
//   };
// });
// }
// moveUnicorn();
// })
