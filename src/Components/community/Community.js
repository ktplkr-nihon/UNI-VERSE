import React, {Component} from 'react';
import './community.css';
class Community extends Component {
   constructor(){
      super();
      this.state = {
          image:'',
          comment:'',
          postc: false
      }
   }
   imageHolder = (event) => {
   	 this.setState({image:event.target.value})
   }
   commentHolder = (event) => {
   	this.setState({comment:event.target.value})
   }
   postSubmit = () => {
     this.setState({postc:true})
   }
   createCard = () => {
   	var card = [];
   	card.push(<div className='card'>
   		<img className='card-img' src={this.state.image}/>
        <p className='card-comment'>{this.state.comment}</p>
   	</div>);
   	return card;
   }
	render(){
		return(

              <div className='Communitygrid'>
                  <div className='post-box'>
                       <h1 className='h-1'>POST YOUR THOUGHTS!</h1>
                       	<label className='img-label'>select image</label><br/>
                       	<input onChange={this.imageHolder}className='img-input' type='file' id='fname' name='fname'/>
                       	<textarea onChange={this.commentHolder} className='cmmt-input' id="cmmt" name="cmmt" rows="4" cols="50"/>
                       	<button onClick={this.postSubmit} className='post-submit'>POST</button>
                       	{this.state.postc === true ? this.createCard() : <span></span>}
                  </div>
              </div>
                     
			);
	}
}
export default Community;