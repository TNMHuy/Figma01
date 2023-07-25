import React, { Component } from 'react'

export default class SubBodyB extends Component {
  render() {
   
    return (
      <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
        <p className='subBodyP1'>{this.props.h}</p>
        <p className='subBodyP2'>{this.props.p}</p>
        <button className='butt1'>Learn more</button>
      </div>
    )
  }
}
