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
    continue_order: false
    }
 componentDidMount(){
     const searchParams = new URLSearchParams(this.props.location.search)
     const ingreadents = {}
     for(let param of searchParams.entries()){
        ingreadents[param[0]] = +param[1];
     }
     this.setState({ingreadents: ingreadents})
 }
 continueOrderForm = () => {
    this.setState({continue_order: !this.state.continue_order})
 }
 render(){
     let contactData = this.state.continue_order? <ContactData ingreadents={this.state.ingreadents}/> : null
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