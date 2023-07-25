import React, { Component } from 'react'
import HeaderJ from './HeaderJ'
import SubBody from './SubBody'
import img from './Rectangle.png'
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
    p5:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.'
}
export default class BodyJ extends Component {
  render() {
    return (
      <div>
        <HeaderJ/>
        <div style={{display:'flex',paddingTop:'150px',paddingBottom:'150px'}}>
            <div style={{width:'100%',display:'flex',
                                     flexDirection:'column',
                                     justifyContent:'center',
                                     gap:'20px',
                                     padding:'80px'
            }}>
            <SubBody h={content.h1} p={content.p5}/>
            <SubBody h={content.h2} p={content.p5}/>
            <SubBody h={content.h3} p={content.p5}/>

            </div>
        <img style={{width:'830px',height:'740px'}} src={img} alt="" />
        </div>
      </div>
    )
  }
}
