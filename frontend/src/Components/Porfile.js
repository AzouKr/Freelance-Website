import React from "react";
import "./Profile.css";
import NavBar from "./NavBar";
import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Porfile() {
  const [info, setinfo] = useState([]);
  const [gig, setgig] = useState([]);
  let history = useHistory();

  Axios.defaults.withCredentials = true;
  Axios.get("http://localhost:3001/api/user/login").then((response) => {
    if (response.data.loggedIn === false) {
      history.push("/signin");
    }else{
      setinfo(response.data.user);
    }
  });

  Axios.post("http://localhost:3001/api/profilegig", {
    email: info.email,
  }).then((response) => {
    setgig(response.data);
  });

  function display() {
    return gig.map((item) => {
      return (
        <div class="card" style={{ width: "18rem" }}>
          <img src={item.image1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.description.substring(0, 50)}</p>
            <div className="bottom">
              <a href="#" class="btn btn-gig">
                Go Ordre It
              </a>
              <h1 className="price">STARTING AT ${item.price}</h1>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <NavBar></NavBar>
      <div className="porfile-section">
        <div className="go-home">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          <h1 className="go">Go back To Homepage</h1>
        </div>
        <div className="profile-box">
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
            alt="Avatar"
            className="profile-img"
          ></img>
          <h1 className="profile-name">{info.username}</h1>
          <div className="profile-info">
            <div className="from">
              <i class="fa fa-globe" aria-hidden="true"></i>
              <h1 className="country-from">From</h1>
              <h1 className="country">{info.country}</h1>
            </div>
            <div className="membre">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <h1 className="country-from">Member since</h1>
              <h1 className="Date">{info.date}</h1>
            </div>
          </div>
        </div>
        <div className="My-gigs">
          <h1>My Gigs</h1>
          <div className="My-Gigs">{display()}</div>
        </div>
      </div>
    </div>
  );
}

export default Porfile;
