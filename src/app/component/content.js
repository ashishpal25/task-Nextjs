import React from 'react'
import About from './about'
import Category from './category'
import Service from './service'
import Colour from './colour'
import Join from './join'
import Blog from './blog'
const content = ({value,value2,value3}) => {
    
  return (
    <>
    <div className='inner-part'>
    <div className='color'>
hii
    </div>
    <div className='content-part'>
      <About value={value}/>
      <Category value={value}/>
      <Service value={value}/>
      <Colour value={value} value2={value2}/>
      <Join value={value}/>
      <Blog value3={value3} value={value}/>
    </div>
    </div>
    </>
  )
}

export default content
