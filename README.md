# WDI30 Project 1: The Unicorn Simulator

## Introduction

I constructed this app during the 3rd week of the Web Development Immersive course at General Assembley London, to create this app I used Javascript, HTML5 and CSS3. This game is a grab and collect game so as the character collides with the collectables the score will increase until the timer runs out.

## The Idea

The idea with this game was to create something very simple but addictive. When the arrows are pressed the unicorn character will move from side to side in the playing zone collecting the falling coins, the coins will stop falling after 30 seconds and the score will be saved on the screen until the reset button is hit.


## App Link

https://unicornsimulator.herokuapp.com/

## Screenshots

Title: 

![Imgur](https://i.imgur.com/I5pXxrj.png)

Playing area: 

![Imgur](https://i.imgur.com/rQZj3wS.png)

In game action:

![Imgur](https://i.imgur.com/DcwiorF.png)

## What was a success?

My greatest achievement during this project was getting the basic functionality working aka getting the character to move side to side and getting the items to fall, This went very well for me and I enjoyed it alot as I could explore the interenet and the world of JavaScript for solutions and tips to get this functionality working.

Example code:

This is part of the basic functionality that helps us control the unicorn with the arrow keys as we used the keyboards keycodes for the left and right arrow keys.

```
function handleKeyCode(e) {
  playerLeftValue = parseInt($unicorn.css('left'));
  if (e.keyCode === 37 && playerLeftValue !== 0)   handlePlayerMovement('-');
  if (e.keyCode === 39 && playerLeftValue <= $(window).width()) handlePlayerMovement('+');
}

function handlePlayerMovement(operation) {
  $unicorn.animate({ 'left': `${operation}=20` }, 0);
}
```

## Challenges

During this project a big challenge for me was getting collision to work on my game as I needed it so that the unicorn could collect the falling coins, this was a long and complicated task and it consumed most of my time during this project but after reading endless StackOverflow posts and getting help off my colleagues I finally got it working. This was a huge lesson for me as I realised that some parts of code are like mini projects and take alot of time and studying to get working.

## Conclusion 

Overall this project was great as it was good to get to study and learn Javascript, HTML5 and CSS3 as individuals making a cool game.

