import React, { Component } from 'react'

export default class SignUpForm extends Component {
  render() {
    return (
      <div>
        <div className='form' >
            <p className='signUp'>Sign up for a free account</p>
            <div className='nameWrap' >
                <div className='border'>First name</div>
                <div className='border'>Last name</div>
            </div>
            <div className='border'>Email</div>
            <div className='border'>Create password</div>
            <button className='butt2'>Register</button>
        </div>
      </div>
    )
  }
}
