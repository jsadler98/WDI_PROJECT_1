
$(init);

let $unicorn;

function init() {
  $unicorn = $('.unicorn');

  $(document).on('keydown', handleKeyCode);
}

function handleKeyCode(e) {
  const playerLeftValue = parseInt($unicorn.css('left'));

  if (e.keyCode === 37 && playerLeftValue !== 0)   handlePlayerMovement('-');
  if (e.keyCode === 39 && playerLeftValue <= 340) handlePlayerMovement('+');
}

function handlePlayerMovement(operation) {
  $unicorn.animate({ 'left': `${operation}=20` }, 0);
}


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
