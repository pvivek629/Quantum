import React from 'react'
import "./RightBottom.css"

function RightBottom() {
  return (
    <div className='rightbottom'>
      {/*Bottom RightSide of Page */}
        <div className='right'>
            <div className='bottom'>
                <p className='invoice'>Invoices</p>
                <div className='button6'>
                <div className='totransfer'>
                    <button className='totransfer1'>To be Transfered</button>
                </div>
                <div className='transfer'>
                    <button className='transfer1'>Transfered</button>
                </div>
                </div>

                {/*Scrollable table */}
                <div class="tableFixHead">
                  <table>
                    <thead>
                      <tr>
                      <th>Bill Number</th>
                        <th>Client</th>
                        <th>Date</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>20211130-000001</td>
                        <td>TECH LIMITED</td>
                        <td>29 Oct,2021</td>
                        <td>2422.50 EUR</td>
                      </tr>
                      <tr>
                      <td>20211130-000002</td>
                        <td>TECH LIMITED</td>
                        <td>30 Nov,2021</td>
                        <td>2000.50 EUR</td>
                      </tr>
                      <tr>
                      <td>20211130-000003</td>
                        <td>TECH LIMITED</td>
                        <td>30 Nov,2021</td>
                        <td>2000.50 EUR</td>
                      </tr>
                      <tr>
                      <td>20211130-000004</td>
                        <td>TECH LIMITED</td>
                        <td>30 Nov,2021</td>
                        <td>2000.50 EUR</td>
                      </tr>
                      <tr>
                      <td>20211130-000005</td>
                        <td>TECH LIMITED</td>
                        <td>30 Nov,2021</td>
                        <td>2000.50 EUR</td>
                      </tr>
                      <tr>
                      <td>20211130-000006</td>
                        <td>TECH LIMITED</td>
                        <td>30 Nov,2021</td>
                        <td>2000.50 EUR</td>
                      </tr>
                    </tbody>
                  </table>     
              </div>

              {/*Invoices Button */}
              <div className='invoices'>
                  <button className='invoices1'>All Invoice</button>
              </div>
      </div>
    </div>
  </div>
  )
}

export default RightBottom
