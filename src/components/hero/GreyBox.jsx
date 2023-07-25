import React, { Component } from 'react'

export default class GreyBox extends Component {
  render() {
    return (
      <div className='greyBox'>
          <img src={this.props.Play} alt="" />
      </div>
    )
  }
}
