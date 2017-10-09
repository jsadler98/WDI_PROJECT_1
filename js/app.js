$(() => {
  const $unicorn = $('.unicorn');

  function moveUnicorn(){
    $(window).on('keydown', function(e) {
      const unicornPosition = $unicorn.position();

      if(e.keyCode == 37) {
        $unicorn.animate({'left': '-=70px'});
      }else if (e.keyCode == 39) {
        $unicorn.animate({'left': '+=70px'});
      }
    });
  }
  moveUnicorn();

  $(window).on('keyup', function() {
    $('.unicorn').stop();
  });
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
