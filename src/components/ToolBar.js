import React from 'react'
import './ToolBar.css' 
import Logo from './assets/log.png'
const ToolBar = ()=>{
   return(
       <div className="ToolBar">
         <img src={Logo} alt="Burger-Logo"/>
         <nav> 
             <ul>
           <li><a href='/'>Burger Builder</a></li>
           <li><a href='/'>Check Out</a>  </li>
           </ul>
         </nav>
       </div>
   )
}

export default ToolBar