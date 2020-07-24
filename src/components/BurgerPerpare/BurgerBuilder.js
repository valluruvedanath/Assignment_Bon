import React,{Component}from 'react';
import Burger from './Burger';
import BurgerControls from './BurgerControls';
import Model from '../ModelContainer/Model';

//import axios from 'axios';
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';
  class BurgerBuilder extends Component{
  state = {
    purchasing: false,
    error: false,
    isAuthenticated: false
  }
  componentDidMount(){
    let auth = localStorage.getItem('accessToken');
    if (auth !== null){
        this.setState({isAuthenticated: true})
      }
        else{
          this.setState({isAuthenticated: false})

        }

   }    continueOrder=()=>{
         let params = []
         for(let i in this.props.ings){
          params.push(encodeURIComponent(i)+"="+encodeURIComponent(this.props.ings[i]))
         }
         let paramString = params.join('&')
         this.props.history.push({
           pathname:'/checkout',
           search : '?'+paramString+"&price="+this.props.price
          });
        }
   UpdatePurchasableState = (ingreadents) => {
     const latestIngradients = ingreadents
     const sum = Object.keys(latestIngradients)
                 .map(igKey => {
                   return latestIngradients[igKey]
                 })
                 .reduce((sum,elm) => {
                   return sum+elm
                 }, 0)
                 console.log(sum)
      return sum > 0;           
   }

  purchasingHandler = () => {
   this.setState({purchasing : true})
  }
  purchasingHandlercancel = () => {
    this.setState({purchasing : false})
   }
  render(){
    let disabledInfo = {
      ...this.props.ings
    }
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let burger_builder = null
    if (this.state.isAuthenticated){
       burger_builder =      <div className="text-center">
       <Model data={this.props.ings} 
              show={this.state.purchasing} 
              close={this.purchasingHandlercancel}
              price = {this.props.price}
              continue={this.continueOrder}/>
              
      <Burger ingreadents={this.props.ings}/>
      <BurgerControls
       add = {this.props.onIngreadentAdded}
       remove = {this.props.onIngreadentRemoved} 
       price={this.props.price}
       disabled = {disabledInfo}
       purchaseble = {this.UpdatePurchasableState(this.props.ings)}
       purchasing = {this.purchasingHandler}
       />
      </div>
    }
  return (
  <div className='text-center'>{this.state.isAuthenticated? burger_builder : <b style={{color: 'red'}}><h1>Please Login and Make ur Own Burger</h1></b>}</div>)
}
}
const mapDispatchToProps = state => {
  return {
    ings: state.ingreadents,
    price: state.totalPrice
  };
}
const mapStateToProps = dispatch => {
  return {
    onIngreadentAdded:(ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingreadentName: ingName}),
    onIngreadentRemoved:(ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingreadentName: ingName})
    
  };
}
export default connect(mapDispatchToProps, mapStateToProps)(BurgerBuilder);

  