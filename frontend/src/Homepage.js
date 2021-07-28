import React from 'react';
import "./Homepage.css";
import {Link} from 'react-router-dom';
import logo from "./img/treva.png";
import back from "./img/bg.png";

function Homepage() {
    return (
        <div className="landing-page">
      <div className="Header">
        <img src={logo} alt="logo" className="logo"></img>
        <Link to="/signin"  style={{ textDecoration: 'none' }}>
        <h1 className="Sign-In">Sign In</h1>
        </Link>
        <Link to="/signup"  style={{ textDecoration: 'none' }}>
        <button className="btn-SignUp">Sign Up</button>
        </Link>
      </div>
      <h1 className="headline">Find Your Dream Job Here</h1>
      <p className="under-headline">The possibilities are endless. We have expert freelancers who work in every</p>
      <p className="under-headline2">technical,professional,and creative field imaginable</p>
      <button className="Hire">Hire</button>
      <button className="Work">Work</button>
      <img src={back} alt="back" className="back"></img>
    </div>
    )
}

export default Homepage
