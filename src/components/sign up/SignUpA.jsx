import React, { Component } from 'react'
import SubSign from './SubSign'
import SignUpForm from './SignUpForm'

export default class SignUpA extends Component {
  render() {
    return (
      <div>
        <SubSign/>
        <div style={{paddingTop:'130px',display:'flex',justifyContent:'center'}}>
        <SignUpForm/>
        </div>
        
        
      </div>
    )
  }
}
