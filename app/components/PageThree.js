import Link from 'next/link'

export default function PageThree() {
    return (
        <div id="thirdPage" className='w-auto h-screen flex flex-col justify-center items-center select-none text-white overflow-hidden'>
            
            <video autoPlay loop muted className='absolute z-2 h-screen w-full object-cover pointer-events-none'>
                <source src='/video/rain.mp4' type='video/mp4' />
            </video>

            <div className='h-[30vh] flex items-center justify-center z-10 p-10 backdrop-filter backdrop-blur-md rounded-lg text-center'>
                <div className='lg:ml-0 flex flex-col justify-center items-center z-10'>
                    <h1 className='lg:text-6xl text-4xl font-bold'>Interested?</h1>
                    <h2 className='lg:text-2xl text-2xl'>Join us on social media</h2>
                    <div className='flex mx-5 mt-5 justify-between space-x-5 w-full max-w-md'>
                        <a href="https://twitter.com/Eco_Swapp" target="_blank" rel="noopener noreferrer" >
                            <img 
                                src='/images/logo-white.png' 
                                alt='x-logo'
                                className='h-14 w-auto'
                            />
                        </a>
                        <a href="https://www.instagram.com/e.c.o_s.w.a.p/" target="_blank" rel="noopener noreferrer">
                            <img 
                                src='/images/instagram.png' 
                                alt='instagram-logo'
                                className='h-14 w-auto'
                            />
                        </a>
                        <a href="https://www.tiktok.com/@e.c.o_s.w.a.p" target="_blank" rel="noopener noreferrer">
                            <img 
                                src='/images/tik-tok.png' 
                                alt='tiktok-logo'
                                className='h-14 w-auto'
                            />
                        </a>
                        <a href="mailto:swapeco@proton.me" target="_blank" rel="noopener noreferrer">
                            <img 
                                src='/images/mail.png' 
                                alt='mail-logo'
                                className='h-14 w-auto'
                            />
                        </a>


                    </div>
                </div>
          </div>
        </div>
      )
    }
