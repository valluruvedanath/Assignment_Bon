import React, {Component} from 'react';
import './Order.css'
class Order extends Component{
render(){
    return(
        <div className="OrderContainer">
            <ul className="order-item">
                <li>{this.props.data.email}</li>
                <li>{this.props.data.name}</li>
                <li>{this.props.data.street}</li>
            </ul>
        </div>
    )
}
}
export default Order;