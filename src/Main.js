import React from 'react'
import Navbar from './Navbar'
import "./Main.css"
import LeftPart from './LeftPart'



function Main() {
  return (
    <div className='main'>
      {/*Navbar Of Website */}
        <Navbar/>
      {/*LeftSide of Website */}
        <LeftPart /> 
    </div>
  )
}

export default Main