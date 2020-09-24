import React,{Component} from 'react';
import './about.css';
import me from './me.jpg';
class About extends Component {
	render(){
		return(

        <div className='aboutcontainer'>
        	<h1 className='abouthead'>ABOUT</h1>
        	<img className='mypic' src={me}/>
            <p className='myself'>Hi! Myself Ashutosh Kumar and I'm a computer science engineer currently getting my degree from SRM university. I created this website to test my skills with react which i learned recently and my vision for this website is a place where people can interact and learn about universe and can give there hypothesis how universe works basically
            . I also want to add researchers to this platform so that they can access every imaginable concept human can think of. </p>
        </div>

			);
	}
}
export default About;