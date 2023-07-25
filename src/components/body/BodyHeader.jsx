import React, { Component } from 'react'

export default class BodyHeader extends Component {
  render() {
    return (
      <div style={{width: '500px',
                   height: '144px',
                   fontFamily: 'Montserrat',
                   fontSize: '48px',
                   fontStyle: 'normal',
                   fontWeight: '400',
                   lineHeight: '72px', 
                   letterSpacing: '-0.72px',
                   paddingLeft:'80px',
                   paddingTop:'120px'
        }}>
        <p>Snap photos and share like never before </p>
      </div>
    )
  }
}
