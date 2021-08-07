import React from 'react'
import "./Adsection.css";
import slideshow from "../img/slideshow.gif";
import {useState, useEffect} from "react";
import Axios from "axios";
import { useHistory, Link } from 'react-router-dom';


function Adsection () {

  let history = useHistory();
  const [info, setinfo] = useState([]);
  Axios.defaults.withCredentials = true;


    useEffect(() => {
      Axios.get("http://localhost:3001/api/user/login").then((response) => {
      if(response.data.loggedIn === false){
        history.push("/signin");
      }else{
      setinfo(response.data.user);
      }
    });
    }, [])

    
    return (
        <div>
        <div className="Section">
        <div className="box">
            <h1 className="welcome">Hi {info.username},</h1>
            <h2 className="sous-welcome1">Get offers from Buyers for</h2>
            <h2 className="sous-welcome2">your Gigs</h2>
            <Link to="/main/createGig">
            <button className="request">Post a Gig</button>
            </Link>
        </div>
        <div className="slideshow">
        <img src={slideshow} alt="Slideshow" className="Slide" />
        </div>
        </div>
        </div>
    )
}

export default Adsection
