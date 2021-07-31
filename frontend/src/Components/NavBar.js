import React from "react";
import "./NavBar.css";
import logo from "../img/treva.png";
import { useHistory } from "react-router-dom";


function NavBar({ props }) {
  let history = useHistory();
  const email = props;

  const profile = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/profile",
      state: {email: email, auth: true},
      });
  }

  const main = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/main",
      state: {email: email, auth: true},
      });
  }

  


  return (
    <div>
      <div className="Header">
        <img src={logo} alt="logo" className="mini-logo" onClick={main} ></img>
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
              <li className="navItem" onClick={profile}>Account</li>
            <i class="fa fa-user" aria-hidden="true"></i>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
