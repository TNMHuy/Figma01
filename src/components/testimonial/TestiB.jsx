import React, { Component } from 'react'
import img from '../body/Rectangle.png'
import SubBody from '../body/SubBody'
import SubBodyB from '../body/SubBodyB'

export default class TestiB extends Component {
  render() {
    return (
      <div style={{display:'flex'}}>
        <div style={{width:'50%'}}>
            <p style={{fontFamily: 'Montserrat',
                   fontSize: '48px',
                   fontStyle: 'normal',
                   fontWeight: '400',
                   lineHeight: '72px', 
                   letterSpacing: '-0.72px',
                   paddingLeft:'80px',
                   paddingTop:'120px',}}>You’re in good company</p>

            <p style={{lineHeight: '50px',
                   fontSize: '36px',
                   opacity:'0.6',
                   letterSpacing: '-0.54px',
                   paddingTop:'30px',
                   width:'750px',
                   paddingLeft:'80px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
         <div style={{display:'grid',gridTemplateColumns:'33.3333% 33.3333% 33.3333%',padding:'80px'}}>
            <img style={{width:'173px',paddingBottom:'80px'}} src={img} alt="" />
            <img style={{width:'173px'}} src={img} alt="" />
            <img style={{width:'173px'}} src={img} alt="" />
            <img style={{width:'173px'}} src={img} alt="" />
            <img style={{width:'173px'}} src={img} alt="" />
            <img style={{width:'173px'}} src={img} alt="" />
        </div>
        </div>
       

        <div style={{width:'50%'}}>
            <img style={{paddingTop:'120px'}} src={img} alt="" />
            <div style={{padding:'64px'}}>

            <SubBody h='Sed ut perspiciatis unde omnis' p='Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.'/>
            </div>
        </div>
        </div>
    )
  }
}
