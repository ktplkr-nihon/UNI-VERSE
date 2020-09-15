import React from 'react';
import './nav.css';
import FA from '../fa/FA.js';
import logo2 from './logo2.png';

const Nav = () =>
{
   return(  
           <div className='nav'>
           <img className='logo' alt='logo' src={logo2} />
           <a className='a1' href='#'>HOME</a>
           <a className='a1'href='#'>COMMUNITY</a>
           <a className='a1'href='#'>ABOUT</a>
           <a className='a1'href='#'>CONTACT US</a>
           <FA/>
           </div>
        
   	);

}
export default Nav;