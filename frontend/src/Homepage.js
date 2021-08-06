import React from 'react';
import "./Homepage.css";
import {Link} from 'react-router-dom';
import logo from "./img/treva.png";
import back from "./img/bg.png";
import { useHistory } from "react-router-dom";


function Homepage() {

  let history = useHistory();

  const Login = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/signin",
      state: {email: "null", auth: false},
      });
  }

  const Register = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/signup",
      state: {email: "null", auth: false},
      });
  }

    return (
        <div className="landing-page">
      <div className="Header">
        <img src={logo} alt="logo" className="logo"></img>
        <Link to="/signin"  style={{ textDecoration: 'none' }} >
        <h1 className="Sign-In" onClick={Login}>Sign In</h1>
        </Link>
        <Link to="/signup"  style={{ textDecoration: 'none' }}>
        <button className="btn-SignUp">Sign Up</button>
        </Link>
      </div>
      <h1 className="headline">Find Your Dream Job Here</h1>
      <p className="under-headline">The possibilities are endless. We have expert freelancers who work in every</p>
      <p className="under-headline2">technical, professional and creative field imaginable</p>
      <Link to="/signin"  style={{ textDecoration: 'none' }}>
      <button className="Hire" onClick={Register}>Hire</button>
      </Link>
      <Link to="/signin"  style={{ textDecoration: 'none' }}>
      <button className="Work" onClick={Register}>Work</button>
      </Link>
      <img src={back} alt="back" className="back"></img>
    </div>
    )
}

export default Homepage
