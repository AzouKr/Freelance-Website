import React from "react";
import {useState} from "react";
import Axios from "axios";
import "./login.css";
import background from "../img/Group145.png";
import background2 from "../img/Group172.png";
import { useHistory } from "react-router-dom";



function Login() {

  let history = useHistory();
  let link = (
    <a
      href="https://freelance-web.herokuapp.com/signup"
      rel="noopener noreferrer"
    >
      Create an account
    </a>
  );
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [info, setinfo] = useState([]);

  Axios.defaults.withCredentials = true;
  Axios.get("http://localhost:3001/api/user/login").then((response) => {
    if(response.data.loggedIn === true){
      history.push("/main");
    }});

  const signin  = (e)  => {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/user/login", {
      email: email,
      password: password,
    }).then((response) => {
       setinfo(response.data);
      });
      if(info.bool){
      history.push("/main");
    }
  };


  return (
    <div class="login-page">
    <img src={background} alt="background" className="background"></img>
    <img src={background2} alt="background2" className="background2"></img>
      <div class="form">
        <form class="login-form">
          <h1 className="login-title">Log in to Treva</h1>
          <input type="text" onChange={(e) => {
              setemail(e.target.value);
            }} placeholder="email" />
          <input type="password" onChange={(e) => {
              setpassword(e.target.value);
            }} placeholder="password" />
          <button onClick={signin}>login</button>
          <p class="message">Not registered? {link}</p>
          <p style={{ color:"red"}}>{info.message}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
