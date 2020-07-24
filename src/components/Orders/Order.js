import React, {Component} from 'react';
import './Order.css';
const style = {
    color: 'red',
    border: '1px solid gray',
    padding: '3px',
    margin: '3px',
    backgroundColor: 'white'

}
class Order extends Component{
render(){
      let ingredents = []
    for(let key in this.props.data.ingredents){
       ingredents.push(<span key={key} style={style}>{key+"("+this.props.data.ingredents[key]+")"}</span>)
    }
    return(
        <div className="OrderContainer">
            <ul className="order-item">
                <li>{this.props.data.email}</li>
                <li>{this.props.data.orderData.name}</li>
                {ingredents}
            </ul>
        </div>
    )
}
}
export default Order;