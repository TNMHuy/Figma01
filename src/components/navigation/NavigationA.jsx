import React, { Component } from 'react'
import img1 from './Union1.png'
import img2 from './Union2.png'
import { Link } from 'react-router-dom'

export default class NavigationA extends Component {
  render() {
    return (
      <div className='navContainer'>
       
        <div className='logoContain'>
          <div className='logoWrap'>
            <img className='logo' src={img1} alt="" />
            <img className='logo' src={img2} alt="" />

          </div>
            <p className='text'>photo</p>
        </div>

        <div >
            <ul className='subNav'>
            <li>
                  <Link to="/about">About</Link>
                </li>
            <li>
                  <Link to="/service">Service</Link>
                </li>
            <li>
                  <Link to="/blog">Blog</Link>
                </li>
            <li>
                  <Link to='/store'>Store</Link>
                </li>
                
                
            </ul>
        </div>

        <div>
            <button className=' butt2'>Register</button>
        </div>

      </div>
    )
  }
}
