import React from "react";
import "./Profile.css";
import NavBar from "./NavBar";
import {useState} from "react";
import Axios from "axios";
import { useLocation} from "react-router-dom";
import { useHistory } from "react-router-dom";


function Porfile() {
  let history = useHistory();
  const location = useLocation().state;
  const email = location.email;
  const [info, setinfo] = useState([]);
  const [gig, setgig] = useState([]);


  Axios.post("http://localhost:3001/api/profileinfo", {
      email: email,
    }).then((response) => {
      setgig(response.data);
    });

    Axios.post("http://localhost:3001/api/profilegig", {
      email: email,
    }).then((response) => {
      setinfo(response.data);
    });

    

    function display() {
      return info.map((item) => {
        return (
          <div class="card" style={{ width: "18rem" }}>       
            <img src={item.image1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">
              {item.description.substring(0, 50)}
              </p>
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

    const home = (e) => {
      e.preventDefault();
      history.push({
        pathname: "/main",
        state: {email: email},
        });
    }

  return (
    <div>
      <NavBar></NavBar>
      <div className="porfile-section">
      <div className="go-home">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
      <h1 className="go" onClick={home} >Go back To Homepage</h1>
      </div>
        <div className="profile-box">
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
            alt="Avatar"
            className="profile-img"
          ></img>
          <h1 className="profile-name">{gig.name} {gig.surname}</h1>
          <div className="profile-info">
            <div className="from">
              <i class="fa fa-globe" aria-hidden="true"></i>
              <h1 className="country-from">From</h1>
              <h1 className="country">{gig.country}</h1>
            </div>
            <div className="membre">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <h1 className="country-from">Member since</h1>
              <h1 className="Date">{gig.Date}</h1>
            </div>
          </div>
        </div>
        <div className="My-gigs">
          <h1>My Gigs</h1>
          <div className="My-Gigs">
          {display()} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Porfile;
