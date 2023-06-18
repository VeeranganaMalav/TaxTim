
import React, { useRef,useEffect,useState } from "react";
import Avatar from './Avatar';
import { Chatbot } from './Chatbot';

export const FinalChat = () => {

    const ref=useRef(null)
    const [visible,setVisible]=useState(false)
  
  
    useEffect(()=>{
      function handleClickOutside(event){
          if(ref.current && !ref.current.contains(event.target) ){
              setVisible(false)
          }
      }
          document.addEventListener("mousedown",handleClickOutside)
          return ()=>{
              document.removeEventListener("mousedown",handleClickOutside)
          }
      
           
      },[ref])
  return (
    <div ref={ref}>
    <Chatbot visible={visible}/>
    <Avatar
          onClick={()=>setVisible(true)} 
         style={{position:'fixed',bottom:'24px',right:'24px'}}/>
    </div>
  )
}
