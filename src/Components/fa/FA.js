import React from 'react';
import './FA.css';
import {Dropdown} from 'react-bootstrap';
import fa from './fa.png';

const FA = () =>
{
	return(
          <Dropdown className='fa'>
  <Dropdown.Toggle className='drop' id="dropdown-basic">
    <img className='dropimg' alt='drop' src={fa}/>
  </Dropdown.Toggle>

  <Dropdown.Menu className='dropmenu'>
    <Dropdown.Item className='text1 dim' href="#">Home</Dropdown.Item><br/>
    <Dropdown.Item className='text1 dim' href="#">Community</Dropdown.Item><br/>
    <Dropdown.Item className='text1 dim' href="#">Explore</Dropdown.Item><br/>
    <Dropdown.Item className='text1 dim' href="#">Contact us</Dropdown.Item><br/>
    <Dropdown.Item className='text1 dim' href="#">About</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
		);
}
export default FA;