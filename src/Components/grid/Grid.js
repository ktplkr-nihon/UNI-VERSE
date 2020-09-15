import React from 'react';
import './grid.css';
import planets from './planets.png';
import galaxy from './galaxy1.png';
import solarsystem from './solarsystem1.png';
const Grid = () =>
{
	return(   
           <div className='gridcontainer'>
             <link href="https://fonts.googleapis.com/css2?family=Exo:wght@600&display=swap" rel="stylesheet"/>
             <div className='header'>
               <p className='question'> EXPLORE THE UNIVERSE </p>
             </div> 
             <div className='info'>
               <a className='p' href='#'>
                 <img className='planets' alt='planets' src={planets}/>
                 <div className="overlay">
                    <div className="text">PLANETS</div>
                 </div>
               </a>
               <a className='g' href='#'>
                 <img className='galaxy' alt='galaxy' src={galaxy}/>
                 <div className="overlay">
                    <div className="text">GALAXIES</div>
                 </div>
               </a>
               <a className='s' href='#'>
                 <img className='solarsystem' alt='solarsystem' src={solarsystem}/>
                 <div className="overlay">
                    <div class="text">BLACKHOLE</div>
                 </div>  
               </a>
             </div>
             <div className='learn'>
                 <p className='signup'>Become a part of Uni-Verse</p>
                 <button className='signUpButton'>Sign up</button>
             </div>
           </div>
		);
}
export default Grid;