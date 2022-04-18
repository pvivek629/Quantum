import { EuroOutlined, EuroSharp, MenuOutlined, VisibilitySharp } from '@mui/icons-material'
import React from 'react'

import "./MiddlePart.css"


function MiddlePart() {
  return (
      <div className='middlepart'>

    {/* Upper Cards of MiddlePage*/}
        <div className='middle'>
            <div className='two'>
                <div className='currency'>
                    <div className='cash'>
                        <h2>All Cash <MenuOutlined className='icon' style={{width:'18px', height:'18px'}}/></h2>    
                    </div>
                    <div className='money'>
                        <span className='heading'>972 <EuroSharp className='euro' style={{width:'30px', height:'28px'}}/></span>
                    </div>
                    <div className='value1'>
                        <p>Main - 2345 34    <a> 139 <EuroSharp className='euro1' style={{width:'15px', height:'12px'}}/></a> </p>
                        <hr />
                        <p>Primary - 9876 34 <a className='value'> 264 <EuroSharp className='euro1' style={{width:'15px', height:'12px'}}/></a> </p>
                        <hr/>
                        <p>BHP - 2345 34     <a> 139 <EuroSharp className='euro1' style={{width:'15px', height:'12px'}}/></a> </p>
                    </div>
                </div>
            </div>
        </div>
    
    {/* Bottom Cards of MiddlePage*/}
    <div className='secondhalf'>
    <div className='new'>
         <div className='three'>
            <div className='currency1'>
                <div className='cash1'>
                    <h2>Cards <b className='icon1'><MenuOutlined className='menu' style={{width:'18px', height:'18px'}}/></b></h2> 
                </div>
                {/*Product name*/}
                <div className='product'>
                    <span className='cashname'>One - 4536</span>
                    <div className='visible'>
                        <VisibilitySharp className='visibility' style={{width: "15px", height: "15px"}}/>
                    </div>
                </div>

                {/*Progress bar */}
                <div className='progress'>
                    <progress id="file" value="500" max="3000" />
                </div>

                <div className='money1'>
                    <span className='money2'>0<EuroOutlined className='euro3' style={{width: "12px" , height:"12px"}}/></span>
                    <span className='money3'>500<EuroOutlined className='euro3' style={{width: "12px" , height:"12px"}}/></span>
                    <span className='money4'>3000<EuroOutlined className='euro3' style={{width: "12px" , height:"12px"}}/></span>
                </div>
                

                <div className='product'>
                    <span className='cashname'>One - 4536</span>
                    <div className='visible'>
                        <VisibilitySharp className='visibility' style={{width: "15px", height: "15px"}}/>
                    </div>
                </div>

                <div className='progress'>
                    <progress id="file" value="2000" max="3000" />
                </div>
                
                <div className='money1'>
                    <span className='money2'>0<EuroOutlined className='euro3' style={{width: "12px" , height:"12px"}}/></span>
                    <span className='money5'>500<EuroOutlined className='euro3' style={{width: "12px" , height:"12px"}}/></span>
                    <span className='money6'>3000<EuroOutlined className='euro3' style={{width: "12px" , height:"12px"}}/></span>
                </div>
                
            </div> 
        </div>
    </div>
    
</div>
    
</div>
  )
}

export default MiddlePart