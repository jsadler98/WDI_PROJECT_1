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



