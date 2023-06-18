import React from 'react'
import { HowitworkChat } from '../Components/HowitworkChat'

export const Howitworks = () => {
  return (
    <>
    <div style={{width:"80%",margin:"auto",marginTop:"30px"}}>
        <div style={{width:"65%",fontSize:"25px",fontWeight:"bold"}}>

        <h1>How Tim helps you complete your tax return right<br/>
Answer Tim's simple questions. Get your tax done. Easy.</h1>
        </div>
        <div style={{display:"flex",marginTop:"30px"}}>
        <div>
            <img src="https://www.taxtim.com/za/images/tim-blinks2.gif" alt="" />
        </div>
        <div style={{marginLeft:"100px"}}>
        <HowitworkChat/>
        </div>
        </div>
        </div>
     <div style={{width:"70%",margin:"auto",marginTop:"30px",fontSize:"20px"}}>
        <div style={{width:"55%",margin:"auto"}}>
        <h1>Enjoy a discount on TaxTim from our discount partners:</h1>
        </div>
        <div style={{display:"flex",gap:"50px",marginTop:"30px"}}>
         <div style={{width:"150px",height:"50px"}}>
         <img  src="https://www.taxtim.com/za/images/partner-old-mutual.png" alt="" />
         </div>
         <div style={{width:"150px",height:"50px"}}>
         <img src="https://www.taxtim.com/za/images/sanlam-reality.png" alt="" />
         </div>
         <div style={{width:"150px",height:"50px"}}>
         <img src="https://www.taxtim.com/za/images/partner-fnb-ebucks.png" alt="" />
         </div>
         <div style={{width:"150px",height:"50px"}}>
         <img src="https://www.taxtim.com/za/images/momentum-logo.png" alt="" />
         </div>
         <div style={{width:"150px",height:"50px"}}>
         <img src="https://www.taxtim.com/za/images/partner-22seven.gif" alt="" />
         </div>
        </div>
     </div>
    </>
  )
}
