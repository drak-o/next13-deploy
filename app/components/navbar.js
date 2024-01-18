import '../globals.css';
import {home, about, contact} from './navrouter';

export default function NavBar() {
    return(
        <nav className='font-bold px-10 lg:px-40 py-4 w-screen backdrop-filter backdrop-blur-md select-none fixed top-0 shadow z-30 '> 
            <div id='Nav-contents' className='flex justify-between'>
                <h1 className='navbar-text text-2xl' onClick={home}>eco swap</h1>
                <ul id='Nav-buttons' className='hidden lg:inline-flex gap-x-8 items-center [&>*]:cursor-pointer navbar-text'>
                    <li className='navbar-text' onClick={home}>HOME</li>
                    <li className='navbar-text' onClick={about}>ABOUT</li>
                    <li className='navbar-text' onClick={contact}>CONTACT</li>
                </ul>            
            </div>
        </nav>
    );
}