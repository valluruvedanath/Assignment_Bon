import React,{Component} from 'react'
import './ToolBar.css' 
import Logo from './assets/log.png'
class ToolBar extends Component{
     state = {
        popupshow:false
    }
    closepopup = () =>{
        this.setState({popupshow:false})
    }
    openpopup = () =>{
        this.setState({popupshow:true})
    }
  render(){
   return(
       <div>
       <div className="ToolBar">
         <img src={Logo} alt="Burger-Logo"/>
         <nav> 
             <ul>
           <li><a href='/'>Home</a></li>
           <li><a href='/'>Ingradients</a>  </li>
           <li style={{float: 'right'}}><a href='/'>Burger Builder</a></li>
           <li style={{float: 'right'}}><a href='/'>Check Out</a>  </li>
           </ul>
         </nav>
         
         </div>
         <span className="HumburgerMenu"onClick={() => this.openpopup()}><i className="glyphicon glyphicon-menu-hamburger"></i></span>
         <div className={this.state.popupshow ? "LeftsideBar" : "Close"}>
         <div className="text-center">
         <img src={Logo} alt="Burger-Logo"/>
         </div>
         <ul>
           <li><a href='/'>Home</a></li>
           <li><a href='/'>Ingradients</a>  </li>
           <li><a href='/'>Burger Builder</a></li>
           <li ><a href='/'>Check Out</a>  </li>
           <li  onClick={()=>this.closepopup()}><a style={{cursor:'pointer'}}>X</a></li>
          </ul>                  
         </div>
       </div>
   )}
}

export default ToolBar