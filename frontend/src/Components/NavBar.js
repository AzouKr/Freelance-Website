import React from "react";
import "./NavBar.css";
import logo from "../img/treva.png";
import { useHistory } from "react-router-dom";
import Axios from "axios";

function NavBar() {
  let history = useHistory();

  const profile = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/profile",
    });
  };

  const Logout = (e) => {
    e.preventDefault();
    Axios.defaults.withCredentials = true;

    Axios.get("http://localhost:3001/api/user/logout");
    history.push({
      pathname: "/",
    });
  };

  const main = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/main",
    });
  };

  return (
    <div>
      <div className="Header">
        <img src={logo} alt="logo" className="mini-logo" onClick={main}></img>
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
            <li className="navItem">Messages</li>
            <li className="navItem" onClick={profile}>
              Account
            </li>
            <i class="fa fa-user" aria-hidden="true"></i>
            <li className="navItem" onClick={Logout}>
              Log out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
