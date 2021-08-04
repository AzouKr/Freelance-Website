import React from "react";
import { useState, useEffect } from "react";
import "./register.css";
import { useHistory } from "react-router-dom";
import background3 from "../img/Group163.png";
import background4 from "../img/Group247.png";
import Axios from "axios";


function Register() {
  let history = useHistory();
  let link = (
    <a href="http://localhost:3000/signin" rel="noopener noreferrer">
      Log In
    </a>
  );

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/api/user/login").then((response) => {
      if(response.data.loggedIn === true){
        history.push("/main");
      }});
  }, [])

  const register = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/editprofile",
      state: {email: email, username: username, password: password},
      });
    
  };
  return (
    <div class="login-page">
      <img src={background3} alt="background3" className="background3"></img>
      <img src={background4} alt="background4" className="background4"></img>
      <div class="form">
        <form class="login-form">
          <h1 className="login-title">Sign Up to Treva</h1>
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => {
              setusername(e.target.value);
            }}
            placeholder="name"
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="password"
          />
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="email address"
          />
          <button onClick={register}>create</button>
          <p class="message">Already registered? {link}</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
