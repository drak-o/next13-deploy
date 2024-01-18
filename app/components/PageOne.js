export default function PageOne() {
  return (
    <div id='firstPage' className='w-auto h-screen flex flex-col justify-center items-center select-none relative'>
      <video autoPlay loop muted className='absolute z-2 w-full h-full object-cover pointer-events-none'>
        <source src='/video/background3.mp4' type='video/mp4' />
      </video>
      <div className='h-[30vh] overflow-hidden flex items-center justify-center z-10'>
        <div className='lg:ml-0 ml-10 flex flex-col justify-center items-center slideInFromBottom z-10'>
          <h1 className='lg:text-6xl text-4xl font-bold'>Swap your old clothes</h1>
          <h2 className='lg:text-2xl text-2xl'>Use our app and help the environment</h2>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-b from-transparent to-black'></div>
    </div>
  )
}