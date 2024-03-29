'use client';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function PageTwo() {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex % 6) + 1);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id='secondPage'
      ref={ref}
      className='flex flex-col lg:flex-row justify-center lg:justify-between select-none items-center px-10 lg:px-20 w-screen h-screen bg-black'
    >
      <h1 className={`text-xl lg:text-4xl font-bold text-gradient max-h-[50vh] hidden lg:block  ${inView ? 'slideInFromLeft ' : ''} `}>
        Welcome to our upcoming app.<br /><br />
        Here, sustainability meets innovation.<br />
        We are a team of passionate students, <br />
        Who want to make a difference. <br />
      </h1>
      <img
        src={`/images/mock-ups/${imageIndex}.png`}
        className={`h-[70vh] lg:h-[80vh] w-auto transition-opacity duration-500 ${inView ? 'fadeIn' : ''}`}
      />
    </div>
  );
}