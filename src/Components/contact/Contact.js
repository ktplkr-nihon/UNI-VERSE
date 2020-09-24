import React,{Component} from 'react';
import './contact.css';
class Contact extends Component{
	render(){
		return(
              <div className='contact-container'>
                 <p className='contact-heading'>DROP A hi! I'M EAGER TO TALK TO YOU.</p>
                 <p className='email-contact animate__animated animate__bounce'>email-ashuengi12@gmail.com</p>
                 <p className='number animate__animated animate__bounce'>contact no. - 9805488991</p>
              </div>
			);
	}
}
export default Contact;