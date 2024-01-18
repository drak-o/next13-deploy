'use client';
import { useInView } from 'react-intersection-observer';

export default function PageTwo() {
  const Component = () => {
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
          src='/images/iPhone 13 Pro Max - Graphite - Portrait.png'
          className='h-[70vh] lg:h-[80vh] w-auto'
        />
      </div>
    );
  };

  return <Component />;
}