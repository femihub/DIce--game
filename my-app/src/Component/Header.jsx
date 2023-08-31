import React from "react";
import { Link,NavLink} from "react-router-dom";
import imageUrl from "../Assets/Images/login-avatar.png";

export default function Header() {
    ///// in-line style method for Navlink
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "red"
    }

    function fakeLogOut () {
        localStorage.removeItem("loggedin")
    }

    return (
        <header className="nav--container">
            <Link
                to="/" 
                className="vanlife--home"
            >   #VANLIFE
            </Link>
            <nav className="vanlife--about">
                <NavLink
                    to="/host" 
                    style={({isActive}) => isActive ? activeStyle : null }
                >   Host
                </NavLink>
                <NavLink 
                    to="/about" 
                    style={({isActive}) => isActive ? activeStyle : null }
                >   About
                </NavLink>
                <NavLink 
                    style={({isActive}) => isActive ? activeStyle : null }
                    to="/vans">Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src={imageUrl} 
                        className="login-icon"
                        alt="login-avatar"
                    />
                </Link>
                <button onClick={fakeLogOut}>X</button>
            </nav>
       </header>
        )
}