import React, {Component} from 'react';
import './App.css';
import Nav from './Components/nav/Nav.js';
import Footer from './Components/footer/Footer.js';
import Grid from './Components/grid/Grid.js';
import Signup from './Components/signupform/Signup.js';
import Community from './Components/community/Community.js';
import About from './Components/about/About.js';
import Contact from './Components/contact/Contact.js';
import Planets from './Components/planets/Planets.js';
import Galaxies from './Components/galaxies/Galaxies.js';
import Blackhole from './Components/blackhole/Blackhole.js';
class App extends Component
{

  constructor()
    {
      super();
      this.state={
         route:'closed',
         navroute:'community'
        };
    }

onModalChange = (route) =>{
 
     this.setState({route: route});
}
onNavClick = (navroute) =>{
  this.setState({navroute: navroute});
}
onNavSelect = () =>
{
  switch(this.state.navroute){
                    case 'community':
                         console.log('community');
                         return(<Community />);
                 
                    case 'about':
                    console.log('about');
                          return(<About />);

                    case 'planets':
                        console.log('planet');
                            return(<Planets />);
                        
                    case 'galaxies':
                            return(<Galaxies />);

                    case 'blackhole':
                            return(<Blackhole />);

                    case 'contact':
                    console.log('contact');
                          return(<Contact />);

                    default :
                    console.log('home');
                          return(<Grid onNavClick={this.onNavClick} navroute={this.state.navroute} onModalChange={this.onModalChange}/>); 
}
}
  render()
  {

     return(
             <div className='container0'>
             <link href="https://fonts.googleapis.com/css2?family=Exo:wght@600&display=swap" rel="stylesheet"/>
                 <Signup onModalChange={this.onModalChange} route={this.state.route}/>
                 <Nav onNavClick={this.onNavClick} navroute={this.state.navroute} />
                 {this.onNavSelect()}
                <Footer />
             </div>
                       );
    }
  }

export default App;
