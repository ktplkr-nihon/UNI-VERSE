import React,{Component} from 'react';
import './blackhole.css';
import blackhole from './blackhole.jpg';
import rblackhole from './r-blackhole.jpg';

class Blackhole extends Component {
	render(){
		return(
			<div className='b-container'>
			<div className='about-b'>
			   <img className='b-image' alt='b-image' src={blackhole} />
			   <h1 className='b-title'>WHAT IS BLACKHOLE ?</h1>
			   <p className='b-info'>A black hole is an astronomical object with a gravitational pull so strong that nothing, not even light, can escape it. A black hole’s “surface,” called its event horizon, defines the boundary where the velocity needed to escape exceeds the speed of light, which is the speed limit of the cosmos. Matter and radiation fall in, but they can’t get out.Two main classes of black holes have been extensively observed. Stellar-mass black holes with three to dozens of times the Sun’s mass are spread throughout our Milky Way galaxy, while supermassive monsters weighing 100,000 to billions of solar masses are found in the centers of most big galaxies, ours included.Astronomers had long suspected an in-between class called intermediate-mass black holes, weighing 100 to more than 10,000 solar masses. While a handful of candidates have been identified with indirect evidence, the most convincing example to date came on May 21, 2019, when the National Science Foundation’s Laser Interferometer Gravitational-wave Observatory (LIGO), located in Livingston, Louisiana, and Hanford, Washington, detected gravitational waves from a merger of two stellar-mass black holes. This event, dubbed GW190521, resulted in a black hole weighing 142 Suns.A stellar-mass black hole forms when a star with more than 20 solar masses exhausts the nuclear fuel in its core and collapses under its own weight. The collapse triggers a supernova explosion that blows off the star’s outer layers. But if the crushed core contains more than about three times the Sun’s mass, no known force can stop its collapse to a black hole. The origin of supermassive black holes is poorly understood, but we know they exist from the very earliest days of a galaxy’s lifetime.Once born, black holes can grow by accreting matter that falls into them, including gas stripped from neighboring stars and even other black holes.In 2019, astronomers using the Event Horizon Telescope (EHT) — an international collaboration that networked eight ground-based radio telescopes into a single Earth-size dish — captured an image of a black hole for the first time. It appears as a dark circle silhouetted by an orbiting disk of hot, glowing matter. The supermassive black hole is located at the heart of a galaxy called M87, located about 55 million light-years away, and weighs more than 6 billion solar masses. Its event horizon extends so far it could encompass much of our solar system out to well beyond the planets.</p>
			</div>
			<div className='b-2'>
	            <h1 className='facts'>BLACKHOLE FACTS</h1>
	            <p className='b-1'>> Anything can become a black hole, in theory.</p>
	            <p  className='b-1'>> Black holes evaporate over time.</p>
	            <p className='b-1'>> Black holes slow down time.</p>
	            <p className='b-1'>> There is a supermassive black hole at the centre of our galaxy.</p>
	            <p className='b-1'>> Black holes are the ultimate energy factories.</p>
	            <p className='b-1'>> Black holes literally pull the space around them.</p>
	            <p className='b-1'>> Black holes could spawn new universes.</p>
	            <p className='b-1'>> Black holes will spaghettify you and everything else.</p>
	            <p className='b-1'>> Einstein didn't discover black holes.</p>
			</div>
			<div className='b-3'>
			  <img className='rblackhole' src={rblackhole} />
			  <p className='real'>REAL BLACKHOLE PICTURE FROM NASA. CHECK IT OUT!</p>
			  <a className='ablackhole' href='https://www.nasa.gov/vision/universe/starsgalaxies/black_hole_description.html'>CLICK HERE!</a>
			</div>
			</div>);
	}
}
export default Blackhole;