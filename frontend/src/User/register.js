import React from "react";
import {useState} from "react";
import Axios from "axios";
import "./register.css";
import background3 from "../img/Group163.png";
import background4 from "../img/Group247.png";

function Register() {
  let link = (
    <a
      href="http://localhost:3000/signin"
      rel="noopener noreferrer"
    >
      Log In
    </a>
  );

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [account, setaccount] = useState("");
  const [info, setinfo] = useState([]);

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/user/register", {
        name: username,
        email: email,
        password: password,
        account: account,
      }).then((response) => {
        setinfo(response.data);
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
          <label>I want:</label>
          <div class="custom_select">
            <select onChange={(e) => {
                  setaccount(e.target.value);
                }}>
              <option value="">Select</option>
              <option value="Hire">Hire</option>
              <option value="Work">Work</option>
            </select>
          </div>
          <button onClick={register}>create</button>
          <p class="message">Already registered? {link}</p>
          <p style={{ color:"red"}}>{info}</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
