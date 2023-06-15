import React, {useState} from 'react'

import { styles } from './styles'

const Avatar=(props)=>{

const [hover,setHover]=useState(false)

console.log(props.visible)
  return (
    <div style={props.style}>
      <div className='transition-3'
      style={{
        ...styles.avatarHello,
        ...{opacity:hover?'1':'0'}
      }}
      >Hey its Sanketh</div>

      <div className='transition-3'
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      onClick={()=>props.onClick && props.onClick()}
      style={{
        ...styles.chatWithMeButton,
        ...{border:hover?' 2px solid green':'2px solid red'}
      }}
      />
    </div>
  )
}
export default Avatar