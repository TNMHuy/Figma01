import React, { Component } from 'react'
import img from './Rectangle.png'
import SubBody from './SubBody'
const content ={
    
    h1:'Sed ut perspiciatis',
    p1:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.'
,

    h2:'Lorem ipsum dolor',
    p2:'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
,

    h3:'Nemo enim ipsam',
    p3:'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.'
,

    h4:'Tempor incididunt',
    p4:'Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.'
,

}
export default class BodyE extends Component {
  render() {
    return (
      <div style={{display:'flex',padding:'80px',gap:'84px'}}>
            <img src={img} alt="" />

            
                <div style={{display:'flex',flexDirection:'column',gap:'24px',justifyContent:'center'}}>
                    <p className='subBodyP1'>{content.h1}</p>
                    <p className='subBodyP2'>{content.p1}</p>
      </div>
            
      </div>
    )
  }
}
