'use client';
import { scroller } from 'react-scroll';

function home() {
        scroller.scrollTo('firstPage', {
            duration: 100,
            delay: 0,
            smooth: 'easeInOutQuad',
            offset: 0
        });
}

function about() {
    scroller.scrollTo('secondPage', {
        duration: 100,
        delay: 0,
        smooth: 'easeInOutQuad',
        offset: 0
    });
}

function contact() {
    scroller.scrollTo('thirdPage', {
        duration: 100,
        delay: 0,
        smooth: 'easeInOutQuad',
        offset: 0
    });
}


export { home, about, contact };