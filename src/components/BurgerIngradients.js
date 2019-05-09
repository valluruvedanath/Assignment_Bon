import React from 'react'
import './Burger.css'

const BurgerIngradients = (props) => {
 let ingradient = null;
 switch (props.type){
     case ('bread-top') :
        ingradient = <div className="Burger-top"></div>
        break;
     case ('bread-bottom') :  
        ingradient = <div className="Burger-bottom"></div>
        break;
     case ('meat') :
        ingradient = <div className="Meat"></div>
        break;
     case ('chease') :  
        ingradient = <div className="Chease"></div>
        break; 
     case ('salad') :  
        ingradient = <div className="Salad"></div>
        break; 
     default:
     ingradient = null;
               

 }
 return ingradient
}

export default BurgerIngradients