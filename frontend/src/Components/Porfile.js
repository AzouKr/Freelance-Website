import React from "react";
import "./Profile.css";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import Axios from "axios";
import Section from "./Section";
import { useHistory, Link } from "react-router-dom";
import Footer from "./Footer";

function Porfile() {
  const [info, setinfo] = useState([]);
  const [gig, setgig] = useState([]);
  let history = useHistory();

  var HtmlToReactParser = require("html-to-react").Parser;
  var htmlToReactParser = new HtmlToReactParser();
  var reactElement = htmlToReactParser.parse(info.description);

  let link1 = (
    <a
      href={info.facebook}
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "#548CA8" }}
    >
      Facebook
    </a>
  );
  let link2 = (
    <a
      href={info.twitter}
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "#548CA8" }}
    >
      Twitter
    </a>
  );
  let link3 = (
    <a
      href={info.instagram}
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "#548CA8" }}
    >
      instagram
    </a>
  );
  let link4 = (
    <a
      href={info.website}
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "#548CA8" }}
    >
      Website
    </a>
  );

  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/api/user/login").then((response) => {
      if (response.data.loggedIn === false) {
        history.push("/signin");
      } else {
        setinfo(response.data.user);
      }
    });
  }, []);

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
              <Link to={`/main/gig/${item.title}`}>
                <a href="#" class="btn btn-gig">
                  Go Ordre It
                </a>
              </Link>
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
      <Section />
      <div className="profile-body">
        <div className="porfile-section">
          <div className="go-home">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            <h1 className="go">Go back To Homepage</h1>
          </div>
          <div>
            <div className="profile-box">
              <img src={info.image} alt="Avatar" className="profile-img"></img>
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
            <div className="profile-desc-info">
              <h1 className="Description-title">Description</h1>
              <p className="Description-text">{reactElement}</p>
              <h1 className="Description-links">Linked Accounts</h1>
              <h2 className="facebook-link">{link1}</h2>
              <h2 className="facebook-link">{link2}</h2>
              <h2 className="facebook-link">{link3}</h2>
              <h2 className="facebook-link">{link4}</h2>
              <h1 className="Description-skills">Skills</h1>
              <p className="Description-skills-desc">{info.skills}</p>
              <h1 className="Description-skills">Education</h1>
              <p className="Description-skills-desc">{info.education}</p>
            </div>
          </div>
          <div className="My-gigs">
            <h1>My Gigs</h1>
            <div className="My-Gigs">{display()}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Porfile;
