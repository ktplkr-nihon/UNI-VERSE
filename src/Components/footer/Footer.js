import React from 'react';
import './footer.css';
import li from './li.png';
import insta from './instagram.png';
import git from './github.png';

const Footer = () =>
{
	return(
           <div className='footer'>
             <div className='footainer'>
               <a className='li' href='https://www.linkedin.com/in/ashutosh-kumar-78a23518b'><img className='li' alt='li' src={li}/></a>
               <a className='insta' href='https://www.instagram.com/ashu_1800'><img className='insta' alt='insta' src={insta}/></a>
               <a className='git' href='https://github.com/ktplkr-nihon'><img className='git' alt='git' src={git}/></a>
             </div>
             <ul className='list'>
                <a href='#' className='listcomponent1'>Policy</a>
                <a href='#' className='listcomponent2'>Motto</a>
                <a href='#' className='listcomponent3'>Resources</a>
             </ul>
           </div>
		);

}
export default Footer;