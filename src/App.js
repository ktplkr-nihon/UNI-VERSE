import React, {Component} from 'react';
import './App.css';
import Nav from './Components/nav/Nav.js';
import Footer from './Components/footer/Footer.js';
import Grid from './Components/grid/Grid.js';
import Signup from './Components/signupform/Signup.js';

class App extends Component
{

  constructor()
    {
      super();
      this.state={
         route:'closed'
        };
    }

onModalChange = () =>{
 
     this.setState({route: 'open'});
}
  render()
  {

     return(
             <div className='container0'>
             <link href="https://fonts.googleapis.com/css2?family=Exo:wght@600&display=swap" rel="stylesheet"/>
                 <Signup route={this.state.route}/>
                 <Nav />
                <Grid onModalChange={this.onModalChange}/>
                <Footer />
             </div>
                       );
    } 
}
export default App;
