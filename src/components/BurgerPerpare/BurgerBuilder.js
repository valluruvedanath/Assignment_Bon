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
    error: false
  }
  componentDidMount(){
    // axios.get("https://burger-bulider-58f60.firebaseio.com/ingridents.json")
    // .then(response =>{
    //   this.setState({ingreadents:response.data});
    // })
    // .catch(error =>{
    //   this.setState({error: true})
    // })
   }    continueOrder=()=>{
         let params = []
         for(let i in this.props.ings){
          params.push(encodeURIComponent(i)+"="+encodeURIComponent(this.props.ings[i]))
         }
         let paramString = params.join('&')
         this.props.history.push({
           pathname:'/checkout',
           search : '?'+paramString
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
    if (this.props.ings){
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
  return (burger_builder)
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

  