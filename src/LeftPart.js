import { CurrencyRupeeOutlined, DescriptionOutlined, EventNoteSharp, HomeOutlined, LoginRounded,  PersonOutlined,  SavingsOutlined, SettingsOutlined, SyncAltOutlined, TocOutlined, UploadFileOutlined } from '@mui/icons-material'
import React from 'react'
import "./LeftPart.css"
import MiddlePart from './MiddlePart'
import Right from './Right'




function LeftPart() {
  return (
    <div className='main'>
      <div>
      <div className='one'>
           <div className='data'>
             
            <ul>
              <li><a href="#home"><HomeOutlined className='button'/>Home</a></li>
              <li><a href="#annonates"><SavingsOutlined className='button'/>Annonate</a></li>
              <li><a href="#customer"><PersonOutlined className='button'/>Customer</a></li>
              <li><a href="#invoices"><DescriptionOutlined className='button'/>Invoices</a></li>
              <li><a href="#expense"><CurrencyRupeeOutlined className='button'/>Expenses</a></li>
              <li><a href="#quotes"><EventNoteSharp className='button'/>Quotes</a></li>
              <li><a href="#bank"><SyncAltOutlined className='button'/>Bank</a></li>
              <li><a href="#accounting"><TocOutlined className='button'/>Accounting</a></li>
            </ul>
           
            <div className='upload'>
              <UploadFileOutlined className='upload1' style={{ width: '200px', height: '100px' , color:"#603F8B"}}/>
              <span className='submit'>Submit a new <br/><p className='document'>document here</p></span>
            </div>

            <div className='logout'>
              <LoginRounded className='login' style={{color:"#603F8B"}}/>
                <p className='logout1'>Logout</p>
              </div>
              <div className='setting'>
                <SettingsOutlined className='set' style={{color:"#603F8B"}}/>
                <span className='setting1'>Settings</span>
            </div>
            

           </div>
           <MiddlePart/>
           <Right/>
      </div>
      
      </div>
      
    </div>
  )
}

export default LeftPart
