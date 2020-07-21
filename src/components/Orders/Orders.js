import React, {Component} from 'react';
import axios from 'axios';
import Order from './Order'
class Orders extends Component {
    state ={
        orders: []
    }
    componentDidMount(){
        axios.get('https://burger-bulider-58f60.firebaseio.com/orders.json')
        .then(rep =>{
            console.log("loaded orders.");
            this.setState({orders: rep.data})
            console.log(rep.data);
        })
    }
    render(){
         let orders_data = []
         for(let key in this.state.orders){
            orders_data.push(<Order key={key} data={this.state.orders[key].orderData} />)
         }
        return <div >
            <h1 className='text-center'>Order List</h1>
            {orders_data}
        </div>
    }
}
export default Orders;