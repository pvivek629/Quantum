import { ArrowDropDownOutlined, ElevatorTwoTone, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
       <div className='name'>

         {/*Logo */}
          <a className='logo'>Logo</a>
            <div className='elevator'>
                <ElevatorTwoTone className='elevator1' style={{width: '50px', height: '35px'}}/>
            </div>

          {/* Search Bar */}
            <div className='search'>
              <div className="header__search">
                <SearchOutlined className='searchicon' style={{ width:"18px" , height:"18px"}}/>
                <input type="text" placeholder="Search"/> 
              </div>
            </div>

          {/* Letter Q */}
            <div className='word'>
              <span className='q'>Q</span>
          </div>

          {/*Company Name*/}
          <div className='navright'>
              <a className='name1'>Quantum Dynamics</a> <ArrowDropDownOutlined className='arrow' style={{width:"30px" , height:"30px"}}/>
          </div>

       </div>
    </div>
  )
}

export default Navbar