import React from 'react'
import './Burger.css'
const controls = [
    {lable: 'Salad', type: 'salad'},
    {lable: 'Meat', type: 'meat'},
    {lable: 'Cheese', type: 'cheese'}
]
const burgerControls = (props) =>{
    console.log(props.disabled);
    var style = {
        display:'inline-block',
        margin:'20px'
    }
    console.log("Oeder Now "+ props.purchaseble)
   return(

       <div className='Burger-control-container'>
           <p>Cost of Burger : {props.price}</p>
       {controls.map(ctrl =>(
             <div className="row" key={ctrl.lable}>
                <div className="col-sm-3"></div>
                <div className="col-sm-2 text-right"style={style}><strong>{ctrl.lable}</strong></div>
                <div className="col-sm-2 text-right">
                    <button className={props.disabled[ctrl.type] ? "Disable": "Less"} onClick={()=>props.remove(ctrl.type)} disabled={props.disabled[ctrl.type]}>Remove</button>
                </div>
                <div className="col-sm-2 text-left">
                    <button className="More" onClick={()=>props.add(ctrl.type)}>Add</button>
                </div>
                <div className="col-sm-3"></div>

             </div>

             
           ))}
            <div className="row">
                       <button onClick = {() => props.purchasing()}
                        className={props.purchaseble ? "Checkout-btn" : "Disable"}
                        disabled={!props.purchaseble}>Order Now</button>

             </div>
       </div>
   )
}

export default burgerControls