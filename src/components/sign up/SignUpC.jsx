import React, { Component } from 'react'

export default class SignUpC extends Component {
  render() {
    return (
      <div style={{display:'flex',padding:'120px',gap:'450px',alignItems:'center'}}>
        <p className='singUpP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        <div style={{display:'flex',gap:'30px'}}>
        <button className='butt2' >Join Today</button>
        <button className='butt1' >Contact Us</button>

        </div>
      </div>
    )
  }
}
