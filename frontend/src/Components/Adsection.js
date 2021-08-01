import React from 'react'
import "./Adsection.css";
import slideshow from "../img/slideshow.gif";
import {useState} from "react";
import Axios from "axios";

function Adsection () {

  const [info, setinfo] = useState([]);
  Axios.defaults.withCredentials = true;

    Axios.get("http://localhost:3001/api/user/login").then((response) => {
      if(response.data.loggedIn === true){
      setinfo(response.data.user);
      };
    });
    return (
        <div>
        <div className="Section">
        <div className="box">
            <h1 className="welcome">Hi {info.username},</h1>
            <h2 className="sous-welcome1">Get offers from sellers for</h2>
            <h2 className="sous-welcome2">your project</h2>
            <button className="request">Post a Request</button>
        </div>
        <div className="slideshow">
        <img src={slideshow} alt="Slideshow" className="Slide" />
        </div>
        </div>
        </div>
    )
}

export default Adsection
