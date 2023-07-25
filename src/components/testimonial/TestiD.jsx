import React, { Component } from 'react'
import SubTesti from './SubTesti'
import img from '../body/Rectangle.png'

export default class TestiD extends Component {
  render() {
    return (
      <div>
        <SubTesti/>
        <div style={{paddingTop:'112px',
                     display:'grid',
                     gap:'80px',
                     gridTemplateColumns:'10% 10% 10% 10%',
                     alignItems:'center',
                     justifyContent:'center'}}>
            <img style={{width:'173px',height:'76px'}} src={img} alt="" />
            <img style={{width:'173px',height:'76px'}} src={img} alt="" />
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
