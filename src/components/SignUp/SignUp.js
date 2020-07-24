import React, {Component} from 'react';
import axios from 'axios';
import './SignUp.css'

class SignUp extends Component{
    state = {
        email: '',
        password: '',
        isSignUp: false,
        isAuth: false
    }
    componentDidMount(){
        if(localStorage.getItem('accessToken') !== null ){
            this.setState({isAuth: true})
        }else{
            this.setState({isAuth: false})

        }
    }
    sign_up = (e)=>{
        e.preventDefault()
        let url = ''
        if (this.state.isSignUp){
            url ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNwfaziIANwi5PYiY4pBxlhqN1c7lO_e4'
        }else{
        
            url ='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNwfaziIANwi5PYiY4pBxlhqN1c7lO_e4'
         }
        axios.post(url, {email: this.state.email, password: this.state.password, returnSecureToken: true})
        .then(rep =>{
            if (rep.status === 200){
                localStorage.setItem('accessToken', rep.data.idToken);
                localStorage.setItem('UserId', rep.data.localId);
                localStorage.setItem('email', rep.data.email);
                this.props.history.push('/');
            }
            console.log(localStorage.getItem('accessToken'));
        })
        .catch(error=>{
            console.log(error)
        })
    }
    storeLoginData = (e)=> {
     let log_in_form = {...this.state}
     if (e.target.name === 'typeFrom'){
         let value_data = e.target.value === 'SignUp' ? true : false 
        log_in_form['isSignUp'] = value_data    
     }
     else{
     log_in_form[e.target.name] = e.target.value
    }
     this.setState(log_in_form)
    }
render(){
    return(
        <div className='text-center contBlock'>
            <br/>
            <form onSubmit={this.sign_up}>
            <label>Email : </label>
            <input type='email' name='email' value={this.state.email} onChange={this.storeLoginData} required/> <br/><br/>
            <label>Password : </label>
            <input type='password' name='password' value={this.state.password} onChange={this.storeLoginData} required/><br/><br/>
            <label>Form type SignIn/SignUp : </label>
            <select name='typeFrom' value={this.state.isSignUp ? 'SignUp': 'SignIn'} onChange={this.storeLoginData}>
                <option value='SignUp'>SignUp</option>
                <option value='SignIn'>SignIn</option>

            </select><br/><br/>
             <button type='submit'>{this.state.isSignUp? 'SignUp' : 'SignIn'}</button>
            </form>
        </div>
    )
}
}
export default SignUp;