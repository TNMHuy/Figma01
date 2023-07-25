import React, { Component } from 'react'
import img1 from './Union1.png'
import img2 from './Union2.png'

export default class Logo extends Component {
  render() {
    return (
        <div className='logoContain'>
        <div className='logoWrap'>
          <img className='logo' src={img1} alt="" />
          <img className='logo' src={img2} alt="" />

        </div>
          <p className='text'>photo</p>
      </div>
    )
  }
}
