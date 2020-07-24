import React, {Component} from 'react';
import axios from 'axios';
import Order from './Order'
class Orders extends Component {
    state ={
        orders: []
    }
    componentDidMount(){
        let userId = localStorage.getItem('UserId')
        let auth = localStorage.getItem('accessToken')
        let queryParam = '?auth='+auth+'&orderBy="userId"&equalTo="'+userId+'"'
        axios.get('https://burger-bulider-58f60.firebaseio.com/orders.json'+queryParam)
        .then(rep =>{
            this.setState({orders: rep.data})
        })
        .catch(e => {
            console.log(e.response.data.error);
           
        })
    }
    render(){
         let orders_data = []
         for(let key in this.state.orders){
            orders_data.push(<Order key={key} id={key} data={this.state.orders[key]} price={this.state.orders[key].price} />)
         }
         
        return <div className='OrderContainer'>
            <h1 className='text-center'>Order List</h1>
            {orders_data.length > 0 ? orders_data : <h2 className='text-center'>Your not Ordered any Burger.</h2>}
        </div>
    }
}
export default Orders;