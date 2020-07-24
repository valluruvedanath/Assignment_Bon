import React, {Component} from 'react';
import ContactData from './ContactData/ContactData'
import Burger from './BurgerPerpare/Burger'
class Checkout extends Component {
    state={
         ingreadents : {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    continue_order: false,
    price:0
    }
 componentDidMount(){
     const searchParams = new URLSearchParams(this.props.location.search)
     const ingreadents = {}
     let price = 0
     for(let param of searchParams.entries()){
        if(param[0] === 'price'){
            price = +param[1]
        }
        else{
        ingreadents[param[0]] = +param[1];
    }
     }
     this.setState({ingreadents: ingreadents, price: price})
 }
 continueOrderForm = () => {
    this.setState({continue_order: !this.state.continue_order})
 }
 render(){
     let contactData = this.state.continue_order? <ContactData ingreadents={this.state.ingreadents} price={this.state.price}/> : null
     let button = !this.state.continue_order ? <button onClick={this.continueOrderForm}>Continue</button> : null 
     return(
         <div className="text-center">
          <Burger ingreadents={this.state.ingreadents}/> <br/>
            {button}
            {contactData}
         </div>
     );
 }
}
export default Checkout;