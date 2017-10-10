$(init);

let $unicorn;

function init() {
  $unicorn = $('.unicorn');
  $(document).on('keydown', handleKeyCode);
  createCoin();
  // animateFall();
}

function handleKeyCode(e) {
  const playerLeftValue = parseInt($unicorn.css('left'));

  if (e.keyCode === 37 && playerLeftValue !== 0)   handlePlayerMovement('-');
  if (e.keyCode === 39 && playerLeftValue <= 340) handlePlayerMovement('+');
}

function handlePlayerMovement(operation) {
  $unicorn.animate({ 'left': `${operation}=20` }, 0);
}

function createCoin() {
  const coin = $('<div class="coins"></div>');
  coin.css('left', `${Math.floor(Math.random() * 390)}px`);
  $('.playingArea').append(coin);
  animateCoin(coin);
setInterval(() => {
}, 1000);
}

function animateCoin(coin) {
  coin.animate({top: '600'}, 2000);
}


function randomWidth() {
  const randomWidth = Math.floor(Math.random()*500);
  $.coins({'absolute': randomWidth});
}

// function animateFall(){
//   $coins.animate({top: '600'}, 2000, callback);
//   function callback() {
//   }
// }



// setinterval(function(){
//   $("#animate").animate({top:'-50'},1000)
// },2000);
