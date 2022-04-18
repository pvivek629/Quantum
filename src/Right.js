import { ExpandMoreOutlined, MoreVertOutlined, SouthOutlined, TocOutlined, UnfoldMoreOutlined, WarehouseOutlined } from '@mui/icons-material'
import React from 'react'
import "./Right.css"
import RightBottom from './RightBottom'

function Right() {
  return (
    <div className='right1'>
        {/*RightSide of Page */}
        <div className='data'>
            <div className='dataname'>
                <div className='data1'>
                    <h1>Transfers</h1>
                    <div className='button3'> 
                        <button className='account1'><WarehouseOutlined className='warehouse'  style={{width:"20px", height:"15px"}}/>All accounts <ExpandMoreOutlined className='expand' style={{width:"20px", height:"15px"}}/></button>
                    </div>
                    <div className='button4'>
                        <button className='hours'><TocOutlined className='toco' style={{width:"20px", height:"15px"}}/>24 Hours <ExpandMoreOutlined className='expand1' style={{width:"20px", height:"15px"}}/></button> 
                        
                    </div>
                    <MoreVertOutlined className='dot'/>
                </div>
                <div className='button5'>
                    <div className='execute'>
                        <button className='execute1'>Executed</button>
                    </div>
                    <div className='running'>
                        <button className='running1'>Running</button>
                    </div>
                </div>

                {/* list of Data in table form */}
            <div className='table'>
                
                <thead>
                <tr>
                    {/*table heading */}
                    <th>Beneficiary<UnfoldMoreOutlined className='logo2' style={{width: "15px" , height:"15px"}}/></th>
                    <th>Account <SouthOutlined className='logo2'style={{width: "15px" , height:"15px"}}/></th>
                    <th>Date <SouthOutlined className='logo2' style={{width: "15px" , height:"15px"}}/></th>
                    <th>Next Transfer<SouthOutlined className='logo2' style={{width: "15px" , height:"15px"}}/></th>
                    <th>Amount<UnfoldMoreOutlined className='logo2' style={{width: "15px" , height:"15px"}}/></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    {/*table data */}
                    <td>Jhon Doe<br/>
                        <span className='productvalue'>FR06 0000 0000 0000</span>
                    </td>
                    <td>Bansira-Main-4456 56</td>
                    <td>3 Feb 2022</td>
                    <td>3 Mar 2022</td>
                    <td>-10.00 EUR</td>
                </tr>
                <tr>
                    <td>Philleie Fudsa<br/>
                        <span className='productvalue'>FR05 0000 0000 0000</span>
                    </td>
                    <td>BNP-4456 56</td>
                    <td>7 Feb 2022</td>
                    <td>7 Mar 2022</td>
                    <td>-12.00 EUR</td>
                </tr>
                <tr>
                    <td>Lukasu Suda<br/>
                        <span className='productvalue'>FR04 0000 0000 0000</span>
                    </td>
                    <td>Bansira-Primary-3322 95</td>
                    <td>5 Feb 2022</td>
                    <td>5 Mar 2022</td>
                    <td>-34.00 EUR</td>
                </tr>
                <tr>
                    <td>Mulasay Nama<br/>
                        <span className='productvalue'>FR03 0000 0000 0000</span>
                    </td>
                    <td>Bansira-Primary-3322 95</td>
                    <td>6 Feb 2022</td>
                    <td>6 Mar 2022</td>
                    <td>-23.00 EUR</td>
                </tr>
                
                </tbody>
               
            </div>
            </div>
        </div>
        <RightBottom/>
    </div>
  )
}

export default Right
