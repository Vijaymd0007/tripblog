import { Component } from "react";
import "./NavbarStyle.css"
import {Menuitems} from "./Menuitems"
import {Link} from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';



class Navbar extends Component{
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">TrekTrendy</h1>

                <div onClick={this.handleClick} className="menu-icons">
                    <i className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ?"nav-menu active":"nav-menu"}>
                    {Menuitems.map((item,index)=>{
                        return(
                            <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                        )
                    })}
                    <button>Sign Up</button>
                 
                </ul>
            </nav>
        )
    }
}

export default Navbar;