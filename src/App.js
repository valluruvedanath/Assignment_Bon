import React,{Component} from 'react';
import './App.css';
import Aux from './hoc/Aux';
import Burger from './components/Burger'
import BurgerControls from './components/BurgerControls'
import Model from './components/Model'
const INGRADIENT_PRICE = {
  salad:0.5,
  cheese:1,
  meat:2
}
class App extends Component{
  state = {
    ingreadents : {
      salad: 0,
      meat: 0,
      cheese: 0
      
    },
    totaPrice:4,
    purchaseble: false,
    purchasing: false
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
      this.setState({ purchaseble : sum > 0})           
   }

  addIngradient = (type) =>{
    let Oldingradients = {...this.state.ingreadents}
    let Oldingradientscount =  Oldingradients[type]
    let newCount = Oldingradientscount + 1;
    Oldingradients[type] = newCount;
    let priceaddtion = INGRADIENT_PRICE[type];
    let OldPrice = this.state.totaPrice;
    let newPrice = OldPrice + priceaddtion;
    this.setState({ingreadents: Oldingradients, totaPrice: newPrice})
    this.UpdatePurchasableState(Oldingradients)
  }
  removeIngradient = (type) =>{
    let Oldingradients = {...this.state.ingreadents}
    if (Oldingradients[type] <= 0)
    {
          return
    }
    let Oldingradientscount =  Oldingradients[type]
    let newCount = Oldingradientscount - 1;
    Oldingradients[type] = newCount;
    let priceaddtion = INGRADIENT_PRICE[type];
    let OldPrice = this.state.totaPrice;
    let newPrice = OldPrice - priceaddtion;
    this.setState({ingreadents: Oldingradients, totaPrice: newPrice})
    this.UpdatePurchasableState(Oldingradients)

  }
  purchasingHandler = () => {
   this.setState({purchasing : true})
  }
  purchasingHandlercancel = () => {
    this.setState({purchasing : false})
   }
  render(){
    let disabledInfo = {
      ...this.state.ingreadents
    }
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }
  return (
    <Aux>
      <div className="text-center">
      <Model data={this.state.ingreadents} 
             show={this.state.purchasing} 
             close={this.purchasingHandlercancel}
             price = {this.state.totaPrice}/>
     <Burger ingreadents={this.state.ingreadents}/>
     <BurgerControls
      add = {this.addIngradient}
      remove = {this.removeIngradient} 
      price={this.state.totaPrice}
      disabled = {disabledInfo}
      purchaseble = {this.state.purchaseble}
      purchasing = {this.purchasingHandler}
      />
     </div>
    </Aux>)
                  }

}

export default App;
