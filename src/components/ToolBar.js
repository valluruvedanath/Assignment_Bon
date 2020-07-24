import React,{Component} from 'react'
import './ToolBar.css' 
import Logo from './assets/log.png';
import {
       Link
  } from "react-router-dom";
    
class ToolBar extends Component{
     state = {
        popupshow:false,
        isAuth: false
    }
    componentDidMount(){
        let auth = this.props.isAuth
        if (auth !== null){
            this.setState({isAuth: true})
        }
        else{
            this.setState({isAuth: false})
        }
        console.log("auth"+auth)
    }
    closepopup = () =>{
        this.setState({popupshow:false})
    }
    openpopup = () =>{
        this.setState({popupshow:true})
    }
    componentDidUpdate(prePros, preState){
        if (preState.popupshow)
            this.setState({popupshow: false})
    }
  render(){
   return(
       <div>
       <div className="ToolBar">
         <img src={Logo} alt="Burger-Logo"/>
         <nav> 
              <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/orders">Orders</Link>  </li>
           <li>
               {!this.state.isAuth?<Link to="/signup">Login</Link> : <Link to="/logout">LogOut</Link>}
                </li>

           <li style={{float: 'right'}}><Link to='/burger-build'>Burger Builder</Link></li>
           {/* <li style={{float: 'right'}}><a href='/'>Check Out</a>  </li> */}
           </ul>
         </nav>
         
         </div>
         <span className="HumburgerMenu"onClick={() => this.openpopup()}><i className="glyphicon glyphicon-menu-hamburger"></i></span>
         <div className={this.state.popupshow ? "LeftsideBar" : "Close"}>
         <div className="text-center">
         <img src={Logo} alt="Burger-Logo" style={{color: 'white'}}/>
         </div>
         <ul onClick={()=>this.closepopup()}>
         <li><Link to="/">Home</Link></li>
           <li><Link to="/orders">Orders</Link>  </li>
           <li>
               {!this.state.isAuth?<Link to="/signup">Login</Link> : <Link to="/logout">LogOut</Link>}
                </li>

           <li><Link to='/burger-build'>Burger Builder</Link></li>
          </ul>                  
         </div>
       </div>

   )

}

}

export default ToolBar