import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';


export default function Home() {
  return (
    <div className='overflow-hidden'>
      <PageOne />
      <PageTwo />
      <PageThree />
    </div>
  )
}