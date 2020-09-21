import React from 'react';
import './signup.css';
const Signup = ({ route, onModalChange }) =>
{  
	 if(route === 'open')
	 {
	 	return(
  <div className="container1">
   <div className='exitcontainer' onClick={() => onModalChange('closed')}></div>
    <main className=" container2 ">
      <button onClick={() => onModalChange('closed')} className='xbutton dim'>X</button>
    <p className='textsignup'>Sign Up</p>
      <label className='email' htmlFor='email-address'>Email</label>
      <input className='emailbar input-reset hover-bg-white hover-black ' type='email'/>
      <label className="password" htmlFor="password">Password</label>
        <input className=" passwordbar   hover-bg-white hover-black" type="password"/>
      <label className="checkbox"><input className='checkbox1' type="checkbox"/> Remember me</label> 
      <button class=" signbutton1 grow pointer">Sign up</button>
       <div className="pop">
      <a href="#0" className="pop1  dim white db">Sign in</a>
      <a href="#0" className="pop2  dim white db">Forgot your password?</a>
    </div> 
</main>

    
  </div>
   
	 		);


	 }
	 else {
	 	return(
                <div></div>
	 		);
	 }

}
export default Signup;