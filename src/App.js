import React,{Component} from 'react';
import './App.css';
import Aux from './hoc/Aux';
import BurgerBuilder from './components/BurgerPerpare/BurgerBuilder';
import Checkout from '../src/components/Checkout'
import Orders from './components/Orders/Orders'
import {
  Route,
} from "react-router-dom";
class App extends Component{
  render(){
  return (
    <Aux>
               <Route exact path="/" component={BurgerBuilder} />
               <Route exact path="/checkout" component={Checkout} />
               <Route exact path="/orders" component={Orders} />

    </Aux>)
    }

}

export default App;
