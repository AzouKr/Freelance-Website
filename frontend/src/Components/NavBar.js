import React from "react";
import "./NavBar.css";
import logo from "../img/treva.png";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
import {useState, useEffect} from "react";


function NavBar() {
  let history = useHistory();
  const [info, setinfo] = useState([]);
  const [order, setorder] = useState([]);


    /****************************************** Find User  *********************************/

  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/api/user/login").then((response) => {
      if(response.data.loggedIn === false){
        history.push("/signin");
      }else{ 
      setinfo(response.data.user);
      }
      Axios.post("http://localhost:3001/api/findorder", {
      email: response.data.user.email,
    }).then((result) => {
      setorder(result.data);
      });
  });
  }, [])



  /****************************************** log out  *********************************/
  const Logout = (e) => {
    e.preventDefault();
    
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/api/user/logout");
    window.setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  

  return (
    <div>
      <div className="Header">
      <Link to="/main">
        <img src={logo} alt="logo" className="mini-logo"></img>
        </Link>
        <div class="input_groupe">
          <input type="text" class="input" placeholder="Find Service" />
          <button class="btn btn-primary" type="button">
            Search
          </button>
        </div>
        <div>
          <ul className="navb">
            <li className="navItem" style={{ color: "green" }}>
              Treva Pro
            </li>
            <li className="navItem" style={{ color: "Blue" }}>
              Try Treva Business
            </li>
            <Link to="/main/orders" style={{textDecoration: 'none', color: 'black'}}>
            <li className="navItem">Orders  </li>
            <li className="count">{order}</li>
            </Link>
            <Link to="/profile" style={{textDecoration: 'none', color: 'black'}}>
            <li className="navItem"> Account</li>
            <i class="fa fa-user" aria-hidden="true"></i>
            </Link>
            <li className="logout" onClick={Logout}>
              Log out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
