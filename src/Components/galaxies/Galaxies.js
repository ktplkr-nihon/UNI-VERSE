import React, {Component} from 'react';
import './galaxies.css'
import g1 from './g-1.jpg';
import g2 from './g-2.jpg';
import g3 from './g-3.jpg';
import g4 from './g-4.jpg';
import g5 from './g-5.jpg';
import g6 from './g-6.jpg';
import g7 from './g-7.jpg';
import g8 from './g-8.jpg';
class Galaxies extends Component{
	render(){
		return(
          <div className='galaxies-card'>
           <div className='g1-card'>
           	  <img className='g1' src={g1} />
           	  <h1 className='text-g1'> IC 1101 </h1>
              <p className='g1-details'>
IC 1101 is the largest known galaxy in the universe. It is about 4,000,000 light years away from Earth. It is super-massive elliptical galaxy at the center of the Abell 2029 galaxy cluster. It is one of the brightest galaxies known to us. This galaxy is consist of large number of metal-rich stars, although they are about 7 billion years older than the Sun. British astronomer Frederick William Herschel I discovered on 19 June, 1790. A ultra-massive black hole is at the center of this galaxy. As per one report it consist of  100 trillion (10^14)  stars. It beautifully looks like yellow in colour. The stellar diameter of this galaxy is only 424,000 ± 78,000 ly. </p>
           </div>
           <div className='g2-card'>
              <img className='g2' src={g2}/>
              <h1 className='text-g2'>Hercules A </h1>
              <p className='g2-details'> Hercules A is super-giant elliptical galaxy. Hercules A is a bright astronomical radio source within the vicinity of the constellation Hercules.  As the name Hercules A galaxy is occupied the 2nd place from our top 10 largest galaxies. This galaxy is about 1000 times more massive than our Milky way galaxy (approximately 1015 solar masses). The black hole at the center of this galaxy is largest known black hole to us. The stellar diameter of this galaxy is ‎479+26; −23 kly (147+8; −7 kpc). </p>
           </div>
           <div className='g3-card'>
              <img className='g3' src={g3} />
              <h1 className='text-g3'>Abell 2261</h1>
              <p className='g3-details'>Abell 2261 is a huge elliptical galaxy, it has one million light year diameter.  Abell 2261 is one of 25 galaxy clusters being studied as part of the Cluster Lensing And Supernova survey with Hubble (CLASH) program, a major project to build a library of scientific data on lensing clusters. It is 10 times bigger than our Milky way galaxy. It has binding mass  2.9 ± 0.5×10^14 h^−1
0.70 M☉ </p>
           </div>
           <div className='g4-card'>
              <img className='g4' src={g4} />
              <h1 className='text-g4'>ESO 306-17</h1>
              <p className='g4-details'> ESO 306-17 is a fossil group giant elliptical galaxy in the Columba constellation, about 1 million light-years in diameter, and 493 million light-years away. Apparent size is  2.5 arcsec . It appears that ESO 306-17 is surrounded by other galaxies but the bright galaxies at bottom left are thought to be in the foreground, not at the same distance in the sky. In reality, ESO 306-17 lies fairly abandoned in an enormous sea of dark matter and hot gas. 

</p>
           </div>
           <div className='g5-card'>
              <img className='g5' src={g5} />
              <h1 className='text-g5'>  UGC 2885</h1>
              <p className='g5-details'> UGC 2885 is a large unbarred spiral galaxy of type SA(rs)c in the constellation Perseus.  This galaxy is one the largest known spiral galaxies in the universe. UGC 2885 is may be the possible member of  Pisces-Perseus super-cluster. This galaxy can be observed by only infra-red wavelengths. Estimated diameter of UGC 2885 is  about 832,000 light-years, approximately 8 times the diameter of  our Milky way galaxy.</p>
              </div>
           <div className='g6-card'>
              <img className='g6' src={g6} />
              <h1 className='text-g6'>Comet Galaxy</h1>
              <p className='g6-details'>The Comet Galaxy, a spiral galaxy located 3.2 billion light-years from Earth, was found with the Hubble Space Telescope.    It rushes at 3.5 million km/h through the cluster Abell 2667 and therefore, like a comet, shows a tail, with a length of 600,000 light-years.  Apparent magnitude of Comet galaxy is 18.7 V.

</p>
              </div>
           <div className='g7-card'>
              <img className='g7' src={g7} />
              <h1 className='text-g7'>Condor Galaxy </h1>
              <p className='g7-details'>Condor Galaxy is placed 3rd place from our top 10 largest galaxies.  Condor Galaxy, also known as NGC 6872, is a large barred spiral galaxy of type SB(s)b pec in the constellation Pavo.  It is about   212 million light-years  away from Earth and five billion years old.  English astronomer John Herschel discovered Condor Galaxy on 27 June 1835.  Mass of Condor galaxy is about >10^11  M☉. 

</p>
              </div>
           <div className='g8-card'>
              <img className='g8' src={g8} />
              <h1 className='text-g8'> ESO 444-46</h1>
              <p className='g8-details'>ESO 444-46 is a giant elliptical galaxy located about 640 million light-years away in the constellation Centaurus. It is the brightest member of the galaxy cluster Abell 3558 which lies in the center of the Shapley per cluster. The size of the galaxy is 402,200 ly (123.32 kpc).</p>
              </div>
          </div>
			);
	}
}
export default Galaxies;