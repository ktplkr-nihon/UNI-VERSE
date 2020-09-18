import React, {Component} from 'react';
import './nav.css';
import FA from '../fa/FA.js';
import logo2 from './logo2.png';

class Nav extends Component
{ 

 render()
  {
   return(  
           <div className='nav'>
           <img className='logo' alt='logo' src={logo2} />
           <a className='a1' href='#'>HOME</a>
           <a className='a1'href='#'>COMMUNITY</a>
           <a className='a1'href='#'>ABOUT</a>
          <div class="dropdown">
  
  <button class="dropbtn">EXPLORE</button>
  <div class="dropdown-content">
    <a href="#">PLANET</a>
    <a href="#">GALAXIES</a>
    <a href="#">BLACKHOLE</a>
  </div>
</div>
           <a className='a1'href='#'>CONTACT US</a>
           <FA explore={this.explore} onExploreClick={this.onExploreClick}/>
           </div>
        
   	);

}
}
export default Nav;