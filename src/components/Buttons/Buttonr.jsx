import React from 'react'
import styles from "./Buttonsr.module.css";

const Buttonr = (props) => {
  const {issecond_btn, icon, text, ...rest} = props; 
  
  return (
        <>
        <button {...rest}
        className={issecond_btn ? styles.second_btn : styles.primary_btn}>
        {icon}
        {text}</button>
      
        </>
  )
}

export default Buttonr