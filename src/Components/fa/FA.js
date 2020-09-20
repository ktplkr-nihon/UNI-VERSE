import React from 'react';
import './FA.css';
import {Dropdown} from 'react-bootstrap';
import {Collapse} from 'react-collapse';
import {UnmountClosed} from 'react-collapse';
import fa from './fa.png';

const FA = ({content, show ,close}) =>
{
	return(
          <Dropdown className='fa'>
  <Dropdown.Toggle className='drop' id="dropdown-basic">
    <img className='dropimg' alt='drop' src={fa}/>
  </Dropdown.Toggle>

  <Dropdown.Menu className='dropmenu'>
    <Dropdown.Item className='text1 item-1 dim' href="#">Home</Dropdown.Item><br/>
    <Dropdown.Item className='text1 item-2 dim' href="#">Community</Dropdown.Item><br/>
    <button className='content-1' onClick={ content === false ? show : close }>
    <p className='explore dim'>Explore</p>
    { content === true?
      <div className='explore-2'>
        <a href='#' className='a-1 dim'>Planets</a>
        <a href='#' className='a-2 dim'>Glaxies</a>
        <a href='#' className='a-3 dim'>Blackhole</a>
      </div>:<div></div>
    }
    </button>
    <Dropdown.Item className='text1 item-3 dim' href="#">Contact us</Dropdown.Item><br/>
    <Dropdown.Item className='text1 item-4 dim' href="#">About</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
		);
}
export default FA;