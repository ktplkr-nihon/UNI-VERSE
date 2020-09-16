import React from 'react';
import './signup.css';
const Signup = ({ route }) =>
{  
	 if(route === 'open')
	 {
	 	return(
  <div className="container1">
    <main className=" container2 ">
      <button className='xbutton dim'>X</button>
    <p className='textsignup'>Sign Up</p>
      <label className='email' htmlFor='email-address'>Email</label>
      <input className='emailbar input-reset hover-bg-white hover-black ' type='email'/>
      <label className="password" htmlFor="password">Password</label>
        <input className=" passwordbar   hover-bg-white hover-black" type="password"/>
      <label className="checkbox"><input className='checkbox1' type="checkbox"/> Remember me</label> 
      <button class=" signbutton1 grow pointer">Sign up</button>
       <div className="pop">
      <a href="#0" className="pop1 link dim white db">Sign up</a>
      <a href="#0" className="pop2 link dim white db">Forgot your password?</a>
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