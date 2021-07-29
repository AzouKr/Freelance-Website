import React from 'react'
import "./NavBar.css";
import logo from "../img/treva.png";


function NavBar() {
    return (
        <div>
        <div className="Header">
        <img src={logo} alt="logo" className="mini-logo"></img>
        <div class="input_groupe">
            <input type="text" class="input" placeholder="Find Service"/>
            <button class="btn btn-primary" type="button">Search</button>
        </div>
        <div>
        <ul className="navb">
        <li className="navItem" style={{color: "green"}}>Treva Pro</li>
        <li className="navItem" style={{color: "Blue"}}>Try Treva Business</li>
        <li className="navItem">Messages</li>
        <li className="navItem">Account</li>
        <i class="fa fa-user" aria-hidden="true"></i>
        </ul>
        </div>
        </div>
      </div>
    )
}

export default NavBar
