import React, { Component } from 'react'
import img from './Ellipse.png'
export default class SubBodyI extends Component {
  render() {
   
    return (
      <div style={{display:'flex',flexDirection:'column',gap:'24px',width:'494px',height:'352px'}}>
        <img style={{width: '108px',
                     height: '108px'}}
                      src={img} alt="" />
        <p className='subBodyP1'>{this.props.h}</p>
        <p className='subBodyP2'>{this.props.p}</p>
        <button className='butt1'>Learn more</button>
      </div>
    )
  }
}
