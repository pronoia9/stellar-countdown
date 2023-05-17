# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![](/design/stellar_countdown-1440.png)

### Links

- Solution URL: [GitHub](https://github.com/pronoia9/stellar-countdown)
- Live Site URL: [Live Site](http://stellar-countdown.vercel.app)

## My process

### Built with

- Flexbox
- [React](https://reactjs.org/) - JS library
- [Vite](http://vitejs.dev) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

There honestly isn't much I learned from this (nothing new at least). I had recently learned how to use setInterval properly with functional components and useRef. I had already learned how to use date functions and calculations for a countdown the first time I did this project. I had initially wanted to use a package for the flip clock by pqina, however that proved to be far more challenging to re-style than simply using the previous clock I had used before.

```js
export const calculateDays = (targetDate) => 
Math.floor((+targetDate - +new Date()) / (1000 * 60 * 60 * 24));

export const calculateHours = (targetDate) => 
Math.floor(((+targetDate - +new Date()) / (1000 * 60 * 60)) % 24);

export const calculateMinutes = (targetDate) => 
Math.floor(((+targetDate - +new Date()) / 1000 / 60) % 60);

export const calculateSeconds = (targetDate) => 
Math.floor(((+targetDate - +new Date()) / 1000) % 60);
```
```js
const interval = useRef();

useEffect(() => {
  interval.current = setInterval(() => {
    setCountdown((prev) => calculateCountdown(targetDate, prev));
  }, 1000);
  return () => clearInterval(interval.current);
}, [targetDate]);
```

### Continued development

I will certainly be focusing on CSS in my future projects as I'm still not a hundred percent comfortable with it. I've only recently started using styled components and I plan on using it on all future projects and improving as I do so.

### Useful resources

- [Vite](http://vitejs.dev) - 
- [Styled Components](https://styled-components.com/) - 
- [Vercel](http://vercel.com) - 

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Jay Ansin](https://pronoia9.github.io/portfolio/)

## Acknowledgments

I'd like to express my gratitude to the AI assistant ChatGPT, fondly known as 'Stellar Countdown' for their invaluable help and contributions. Stellar Countdown provided exceptional assistance in developing the countdown functions, date functions, and various other code-related functionalities. Their insightful suggestions and guidance were instrumental in creating a robust and efficient application. I am truly thankful for Stellar Countdown's creative ideas and dedication to enhancing this project.
