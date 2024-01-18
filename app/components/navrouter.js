'use client';

import { scroller } from 'react-scroll';

let isScrolling = false;
let cooldownTimeout = null;
const delay = 400; // Delay in milliseconds
const cooldown = 600; // Cooldown period in milliseconds

function home() {
    if (isScrolling) return;
    isScrolling = true;

    clearTimeout(cooldownTimeout);
    cooldownTimeout = setTimeout(() => isScrolling = false, cooldown);

    setTimeout(() => {
        scroller.scrollTo('firstPage', {
            duration: 800,
            delay: 100,
            smooth: 'easeInOutQuad',
            offset: 0
        });
    }, delay);
}

function about() {
    if (isScrolling) return;
    isScrolling = true;

    clearTimeout(cooldownTimeout);
    cooldownTimeout = setTimeout(() => isScrolling = false, cooldown);

    setTimeout(() => {
        scroller.scrollTo('secondPage', {
            duration: 800,
            delay: 100,
            smooth: 'easeInOutQuad',
            offset: 0
        });
    }, delay);
}

function contact() {
    if (isScrolling) return;
    isScrolling = true;

    clearTimeout(cooldownTimeout);
    cooldownTimeout = setTimeout(() => isScrolling = false, cooldown);

    setTimeout(() => {
        scroller.scrollTo('thirdPage', {
            duration: 800,
            delay: 100,
            smooth: 'easeInOutQuad',
            offset: 0
        });
    }, delay);
}

export { home, about, contact };