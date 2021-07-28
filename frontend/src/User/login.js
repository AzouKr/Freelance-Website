import React from "react";
import {useState} from "react";
import Axios from "axios";
import "./login.css";

function Login() {
  let link = (
    <a
      href="http://localhost:3000/signup"
      target="_blank"
      rel="noopener noreferrer"
    >
      Create an account
    </a>
  );
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [info, setinfo] = useState([]);


  const signin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/user/login", {
      email: email,
      password: password,
    }).then((response) => {
      setinfo(response.data);
    });
  };

  return (
    <div class="login-page">
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
          <p style={{ color:"red"}}>{info}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
