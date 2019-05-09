import React from 'react'
import './Burger.css'
const controls = [
    {lable: 'Salad', type: 'salad'},
    {lable: 'Meat', type: 'meat'},
    {lable: 'Chease', type: 'chease'}
]
const burgerControls = (props) =>{
    console.log(props.disabled);

   return(

       <div className='Burger-control-container'>
           <p>Cost of Burger : {props.price}</p>
       {controls.map(ctrl =>(
             <div key={ctrl.lable}>
             <div  style={{display:'inline-block',margin:'10'}}>{ctrl.lable}</div>
             <button className={props.disabled[ctrl.type] ? "Disable": "Less"} onClick={()=>props.remove(ctrl.type)} disabled={props.disabled[ctrl.type]}>less</button>
             <button className="More" onClick={()=>props.add(ctrl.type)}>more</button>
             </div>
             
           ))}
       </div>
   )
}

export default burgerControls