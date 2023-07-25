import React, { Component } from 'react'
import img from './Ellipse.png'
export default class SubBodyD extends Component {
  render() {
   
    return (
      <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
        <img style={{width: '200px',
                     height: '200px'}}
                      src={img} alt="" />
        <p className='subBodyP1'>{this.props.h}</p>
        <p className='subBodyP2'>{this.props.p}</p>
        <button className='butt2'>Learn more</button>
      </div>
    )
  }
}
