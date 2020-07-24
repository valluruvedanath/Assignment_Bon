import React, {Component} from 'react';
import axios from 'axios';
import './SignUp.css'

class SignUp extends Component{
    state = {
        email: '',
        password: '',
        isSignUp: false,
        isAuth: false,
        has_error: false,
        errorMsg: ''
    }
    componentDidMount(){
        if(localStorage.getItem('accessToken') !== null ){
            this.setState({isAuth: true})
        }else{
            this.setState({isAuth: false})

        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.has_error)
            this.setState({has_error: false})
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
            console.log(rep.message)

            if (rep.status === 400){
                console.log(rep.data)

            }
            console.log(localStorage.getItem('accessToken'));
        })
        .catch(e=>{
            console.log(e.response.data.error.message);
            this.setState({has_error: !this.state.has_error, errorMsg: e.response.data.error.message})
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
            <p style={{color: 'red'}}>
            {this.state.has_error? this.state.errorMsg : null}
            </p>
            <form onSubmit={this.sign_up}>
            <table>
                <tbody>
                <tr>
                    <td>
                        
            <label>Email : </label>
            </td>
            <td>
            <input type='email' name='email' value={this.state.email} onChange={this.storeLoginData} required/> <br/><br/>
            </td>
            </tr>
            <tr>
                    <td>
            <label>Password : </label>
            </td>
            <td>
            <input minLength='6' type='password' name='password' value={this.state.password} onChange={this.storeLoginData} required/><br/><br/>
            </td>
            </tr>
            <tr>
                <td>
            <label>Form type : </label>
            </td>
            <td>
            <select name='typeFrom' value={this.state.isSignUp ? 'SignUp': 'SignIn'} onChange={this.storeLoginData}>
                <option value='SignUp'>SignUp</option>
                <option value='SignIn'>SignIn</option>

            </select><br/><br/>
            </td>
            </tr>
            </tbody>
            </table>
             <button type='submit'>{this.state.isSignUp? 'SignUp' : 'SignIn'}</button>
            </form>
        </div>
    )
}
}
export default SignUp;