import React, {Component} from 'react';
import './planets.css'
import mercury from './mercury.png';
class Planets extends Component{
	render(){
		return(
          <div className='planets-card'>
           <div className='mercury-card'>
           	  <img className='mercury' src={mercury} />
           	  <h1 className='text-mercury'>MERCURY</h1>
              <p className='mercury-details'>The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.</p>
           </div>
          </div>
			);
	}
}
export default Planets;