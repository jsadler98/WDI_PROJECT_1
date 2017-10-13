$(init);

let $time;
let $unicorn;
let $sec;
let $score;
let interval = null;
let timerInterval = null;

function init() {
  $(document).on('keydown', handleKeyCode);
  $unicorn = $('.unicorn');
  $startButton = $('.startbutton');
  $restartButton = $('.restartbutton');
  $startButton.on('click', startButton);
  $restartButton.on('click', restartButton);
  $score = $('#score');
}

function timer() {
  sec = 29;
  timerInterval = setInterval(function() {
    $('#time').html(sec--);
    if (sec == -2){
      sec = 0;
      $('#time').html(sec);
      if (sec === 0){
        gameOver();
      }
    }
  }, 1000);
}

function startButton() {
  createCoin();
  timer();
  let audio = new Audio('sounds/gravityfallsunicornneighing.wav');
  audio.play();
}

function restartButton() {
  createCoin();
  timer();
  $score.html(0);
}

function handleKeyCode(e) {
  playerLeftValue = parseInt($unicorn.css('left'));
  if (e.keyCode === 37 && playerLeftValue !== 0)   handlePlayerMovement('-');
  if (e.keyCode === 39 && playerLeftValue <= $(window).width()) handlePlayerMovement('+');
}

function handlePlayerMovement(operation) {
  $unicorn.animate({ 'left': `${operation}=20` }, 0);
}

function createCoin() {
  interval = setInterval(function () {
    const coin = $('<div class="coins"></div>');
    coin.css('left', `${Math.floor(Math.random() * $(window).width())}px`);
    $('.playingArea').append(coin);
    animateCoin(coin);
  }, 200);
}

function updateScore() {
  $score = $('#score')
  score = $score.html();
  score++
  console.log(score);
  $score.html(score);
}

function animateCoin(coin) {
  coin.animate({
    top: '600'
  }, {
    duration: 3000,
    step: function() {
      const $div1 = $(this);
      const $div2 = $unicorn;
      const x1 = $div1.offset().left;
      const y1 = $div1.offset().top;
      const h1 = $div1.outerHeight(true);
      const w1 = $div1.outerWidth(true);
      const b1 = y1 + h1;
      const r1 = x1 + w1;
      const x2 = $div2.offset().left;
      const y2 = $div2.offset().top;
      const h2 = $div2.outerHeight(true);
      const w2 = $div2.outerWidth(true);
      const b2 = y2 + h2;
      const r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        return;
      } else {
        $(this).remove();
        updateScore()
      }
    },
    complete: function() {
      $(this).remove();
    }
  });
}
function gameOver() {
  clearInterval(interval);
  clearInterval(timerInterval);
}
