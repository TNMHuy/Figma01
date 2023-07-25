import React, { Component } from 'react'
import SubTesti from './SubTesti'
import img from '../body/Rectangle.png'

export default class TestiA extends Component {
  render() {
    return (
      <div>
        <SubTesti/>
        <div style={{padding:'112px',gap:'84px',display:'flex',justifyContent:'center'}}>
            <img style={{width:'173px',height:'76px'}} src={img} alt="" />
            <img style={{width:'173px',height:'76px'}} src={img} alt="" />
            <img style={{width:'173px',height:'76px'}} src={img} alt="" />
            <img style={{width:'173px',height:'76px'}} src={img} alt="" />
            <img style={{width:'173px',height:'76px'}} src={img} alt="" />
            <img style={{width:'173px',height:'76px'}} src={img} alt="" />
        </div>
      </div>
    )
  }
}
