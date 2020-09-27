import React, {Component} from 'react';
import './planets.css'
import mercury from './mercury.png';
import venus from './venus.png';
import earth from './earth.png';
import mars from './mars.png';
import jupiter from './jupiter.png';
import saturn from './saturn.png';
import uranus from './uranus.png';
import neptune from './neptune.png';
class Planets extends Component{
	render(){
		return(
          <div className='planets-card'>
           <div className='mercury-card'>
           	  <img className='mercury' src={mercury} />
           	  <h1 className='text-mercury'>MERCURY</h1>
              <p className='mercury-details'>The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.</p>
           </div>
           <div className='venus-card'>
              <img className='venus' src={venus} />
              <h1 className='text-venus'>VENUS</h1>
              <p className='venus-details'>Similar in size and structure to Earth, Venus has been called Earth's twin. These are not identical twins, however – there are radical differences between the two worlds.Venus has a thick, toxic atmosphere filled with carbon dioxide and it’s perpetually shrouded in thick, yellowish clouds of mostly sulfuric acid that trap heat, causing a runaway greenhouse effect. It’s the hottest planet in our solar system, even though Mercury is closer to the Sun. Venus has crushing air pressure at its surface – more than 90 times that of Earth – similar to the pressure you'd encounter a mile below the ocean on Earth.</p>
           </div>
           <div className='earth-card'>
              <img className='earth' src={earth} />
              <h1 className='text-earth'>EARTH</h1>
              <p className='earth-details'>Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.
The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”</p>
           </div>
           <div className='mars-card'>
              <img className='mars' src={mars} />
              <h1 className='text-mars'>MARS</h1>
              <p className='mars-details'>The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere.This dynamic planet has seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA currently has three spacecraft in orbit, and it has one rover and one lander on the surface. NASA launched the next-generation Perseverance rover to Mars on July 30, 2020. India and ESA have spacecraft in orbit above Mars. These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.</p>
           </div>
           <div className='jupiter-card'>
              <img className='jupiter' src={jupiter} />
              <h1 className='text-jupiter'>JUPITER</h1>
              <p className='jupiter-details'>Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined.Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.</p>
           </div>
           <div className='saturn-card'>
              <img className='saturn' src={saturn} />
              <h1 className='text-saturn'>SATURN</h1>
              <p className='saturn-details'>Saturn is the sixth planet from the Sun and the second largest planet in our solar system.Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn's.Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.</p>
           </div>
           <div className='uranus-card'>
              <img className='uranus' src={uranus} />
              <h1 className='text-uranus'>URANUS</h1>
              <p className='uranus-details'>The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead the scientific community accepted Bode's suggestion to name it Uranus, the Greek god of the sky, as suggested by Bode.</p>
           </div>
           <div className='neptune-card'>
              <img className='neptune' src={neptune} />
              <h1 className='text-neptune'>NEPTUNE</h1>
              <p className='neptune-details'>Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.</p>
           </div>
          </div>
			);
	}
}
export default Planets;