import React, { Component } from 'react'
import Logo from '../navigation/Logo'

export default class FooterB extends Component {
  render() {
    return (
      <div style={{display:'flex',justifyContent:'space-between',padding:'120px 80px',alignItems:'center'}}>
        <div>
            <Logo/>
        </div>
        <div style={{display:'flex',gap:'100px'}}>
            <p style={{fontWeight:'700'}}>Mobile</p>
            <p style={{fontWeight:'700'}}>Community</p>
            <p style={{fontWeight:'700'}}>Company</p>
        </div>
        <div>
        © Photo, Inc. 2019. We love our users!
        </div>
      </div>
    )
  }
}
