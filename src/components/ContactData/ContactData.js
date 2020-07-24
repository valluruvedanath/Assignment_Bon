import React, {Component} from 'react';
import Input from '../ContactData/FormElement'
import axios from 'axios';
import { withRouter } from "react-router-dom"
class ContactData extends Component {
    state = {
        orderForm:{
            name: {
                elementType: 'input',
                elementConfg: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: '',
                validation: {
                    required: true
                }
            },
            street: {
                elementType: 'input',
                elementConfg: {
                    type: 'text',
                    placeholder: 'Your street',
                },
                value: '',
                validation: {
                    required: true
                }
            },
            email: {
                elementType: 'input',
                elementConfg: {
                    type: 'email',
                    placeholder: 'Your email',
                },
                value: '',
                validation: {
                    required: true
                }
            }



        }
    }
    componentDidMount(){
        console.log(this.props)

    }
    handleSubmit = (e) => {
        e.preventDefault()
        let formData = {}
        for(let key in this.state.orderForm){
            formData[key] = this.state.orderForm[key].value
        }
        const order = {
            ingredents: this.props.ingreadents,
            price: this.props.price,
            orderData: formData,
            userId: localStorage.getItem('UserId')
        }
        axios.post('https://burger-bulider-58f60.firebaseio.com/orders.json', order)
        .then(resp =>{
           if(resp.status === 200)
           this.props.history.push('/orders');
        })
        .catch(error =>{
            console.log(error)
        })

    }
    saveData = (e)=>{
        const formData = {...this.state};
        formData.orderForm[e.target.name].value = e.target.value
        this.setState({formData})

    }
    render(){
        let elements = []
        for(let key in this.state.orderForm){
            elements.push(
                <div key={key}>
                <Input 
                
                name={key}
                type={this.state.orderForm[key].elementConfg.type}
                placeholder={this.state.orderForm[key].elementConfg.placeholder}
                value={this.state.orderForm[key].elementConfg.value}
                required = {this.state.orderForm[key].validation.required}
                onChange={this.saveData}/><br/><br/> 
                </div>
           )
        }
        
        return(
             
            <div className="text-center">
            <form onSubmit={this.handleSubmit}>
            {elements}
           <input type='submit' name='submit' />
            </form>
            </div>
        )
            
    }
}
export default withRouter(ContactData);