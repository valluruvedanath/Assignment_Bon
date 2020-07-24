import React from 'react';
import './Button.css'
const button = (props)=>{
    console.log("**********")
    console.log(props.children);
   return( <button className={props.btnName} onClick={()=>props.clicked()}>
   {props.children}
   </button>)
}
export default button;