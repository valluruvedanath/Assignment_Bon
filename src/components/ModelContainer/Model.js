import React from 'react';
import './Model.css'
import Button from '../assets/UI/Button'
const Model =(props)=>{
    const ingradientsSummary = Object.keys(props.data).map( igKey =>{
        return <li key={igKey}>{igKey} : {props.data[igKey]} </li>
    })

    return(
<div className="overlay" style={{transform : props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>
	<div className="popup">
		<h2>Order Summary</h2>
        <span className="close"  onClick={() => props.close()}>&times;</span>
		<div className="content">
          {
            ingradientsSummary
          }
          <p><strong>Total Price : {props.price}</strong></p>
          <Button btnName='Continue' clicked={props.continue}>Continue</Button>
		</div>
	</div>
</div>
 )
}

export default Model;