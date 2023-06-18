
import React from 'react'
import ChatBot from "react-simple-chatbot"

import { ThemeProvider } from 'styled-components'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#2aa12e',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#2aa12e',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}


export const HowitworkChat = () => {

  return (
    <div style={{width:"27%",margin:"auto"}}>
    <ThemeProvider theme={theme}>

     <ChatBot height="470px" hideHeader="true" hideUserAvatar="true" hideBotAvatar="true" contentStyle={{width:"540px",marginLeft:"1px",border:'2px solid red'}} inputStyle={{border:'2px solid green',width:"45px",height:"40px",marginLeft:"1px"}} submitButtonStyle={{marginRight:"5px", marginTop:"7px"}}headerTitle="Tim" botAvatar="https://www.taxtim.com/za/images/og-thumb3.jpg" steps={[
         {
             id:'Greet',
             message:'Hello! My name is Tim. I am here to help you make tax easy.',
             end:true
            },
        ]} />
        </ThemeProvider>
    </div>
  )
}
