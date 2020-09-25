import React, {Component} from 'react';
import './nav.css';
import FA from '../fa/FA.js';
import logo2 from './logo2.png';

class Nav extends Component
{ 
  constructor(props){
    super();
    this.state = {
      content:false
    } 
  }
  show = () =>{
    this.setState({content: true});
  }
  close = () =>{
    this.setState({content: false});
  }
 render()
  {
   return(  
           <div className='nav'>
           <img className='logo' alt='logo' src={logo2} />
           <a className='a1'onClick={() => this.props.onNavClick('home')}>HOME{this.props.navroute === 'home' ? <div className='navlocator'></div> : <div></div> }</a>
           <a className='a1'onClick={() => this.props.onNavClick('community')}>COMMUNITY{this.props.navroute === 'community' ? <div className='navlocator'></div> : <div></div> }</a>
           <a className='a1'onClick={() => this.props.onNavClick('about')}>ABOUT{this.props.navroute === 'about' ? <div className='navlocator'></div> : <div></div> }</a>
          <div class="dropdown">
  
  <button class="dropbtn">EXPLORE{this.props.navroute === 'planets'||this.props.navroute === 'galaxies'||this.props.navroute === 'blackhole' ? <div className='navlocator'></div> : <div></div> }</button>
  <div class="dropdown-content">
    <a onClick={() => this.props.onNavClick('planets')}>PLANET</a>
    <a onClick={() => this.props.onNavClick('galaxies')}>GALAXIES</a>
    <a onClick={() => this.props.onNavClick('blackhole')}>BLACKHOLE</a>
  </div>
</div>
           <a className='a1'onClick={() => this.props.onNavClick('contact')}>CONTACT US{this.props.navroute === 'contact' ? <div className='navlocator'></div> : <div></div> }</a>
           <FA  onNavClick={this.props.onNavClick} close={this.close} show={this.show} content={this.state.content}/>
           </div>
        
   	);

}
}
export default Nav;