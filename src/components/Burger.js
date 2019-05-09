import React from 'react';
import BurgerIngradients from './BurgerIngradients';
import './Burger.css'
const burger = (props) => {
    let updatedIngrd = Object.keys(props.ingreadents)
                       .map(igKey => {
                          return [...Array(props.ingreadents[igKey])].map((_,i)=>{
                           return <BurgerIngradients key={igKey+i} type={igKey}/>
                          });
                       })
                       .reduce((arr,el)=>{
                           return arr.concat(el);
                       }, []);
                if(updatedIngrd.length === 0) {
                    updatedIngrd = <strong>Please start adding ingradients.</strong> 
                }      
                       console.log(updatedIngrd)
   
 return( 
        <div className="Burger">
              <BurgerIngradients type='bread-top' /> 
              <div className="seeds">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div> 
              {updatedIngrd} 
              <BurgerIngradients type='bread-bottom' />       
        </div>
    )
}

export default burger
 