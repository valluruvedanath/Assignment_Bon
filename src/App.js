import React,{Component} from 'react';
import './App.css';
import Aux from './hoc/Aux';
import BurgerBuilder from './components/BurgerPerpare/BurgerBuilder';
import Checkout from '../src/components/Checkout'
import Orders from './components/Orders/Orders'
import SignUp from './components/SignUp/SignUp'
import {
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import ToolBar from './components/ToolBar'

class App extends Component{
  render(){
  return (
    <Aux>      
      <Router>
             <ToolBar isAuth={localStorage.getItem('accessToken')} />
              <Route exact path="/" render={()=><h1 className='text-center'>Welcome to Burger Hub</h1>} />
               <Route exact path="/signup" component={SignUp} />
               <Route exact path="/checkout" component={Checkout} />
               <Route exact path="/orders" component={Orders} />
               <Route exact path="/logout" render={()=>{
                 localStorage.clear();
               }
               } />
               <Route exact path="/burger-build" component={BurgerBuilder} />
               </Router>
    </Aux>)
    }

}

export default App;
