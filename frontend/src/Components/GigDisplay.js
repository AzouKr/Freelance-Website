import React from "react";
import NavBar from "./NavBar";
import Section from "./Section";
import "./GigDisplay.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import {useState} from "react";
import Axios from "axios";
import {useParams} from 'react-router-dom';
import img from "../img/Capture.JPG";
import img1 from "../img/pro.JPG";


function GigDisplay() {
    
    const { title } = useParams();
    const [info, setinfo] = useState([]);


    Axios.get("http://localhost:3001/api/allgigs").then((response) => {
      setinfo(response.data);
    });

  

    function display() {
        return info.filter(item => item.title === title).map((item) => {
          var HtmlToReactParser = require('html-to-react').Parser;
         var htmlToReactParser = new HtmlToReactParser();
         var reactElement = htmlToReactParser.parse(item.description);
          return (
            <div className="gig-info">
        <h1 className="gig-title">
          {item.title}
        </h1>
        <div className="seller">
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
            alt="Avatar"
            className="profile-gig"
          ></img>
          <h1 className="seller-name">edeastman</h1>
        </div>
        <AwesomeSlider animation="cubeAnimation" className="cubeAnimation">
          <div data-src={item.image1} />
          <div data-src={item.image2} />
          <div data-src={item.image3} />
        </AwesomeSlider>
        <h1 className="About">About This Gig</h1>
        <p className="gig-desc">{reactElement}</p>
      </div>
          );
        });
      }

  return (
    <div>
      <NavBar props={"kerimaou@gmail.com"} />
      <Section props={"kerimaou@gmail.com"} />
      <div className="info">
      {display()} 
      <div className="devider"></div>
        <div className="Seller">
          <img src={img} alt="img" className="img-seller"></img>
          <h1 className="About-seller">About The Seller</h1>
          <div className="seller-info">
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
              alt="Avatar"
              className="seller-avatar"
            ></img>
            <div className="seller-info-desc">
              <h1 className="his-name">edeastman</h1>
              <h2 className="seller-desc">
                I make ready to grow businesses for sale
              </h2>
              <div className="stars">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <button className="contact-me">Contact Me</button>
            </div>
          </div>
        </div>
        <div className="profile-seller-info">
          <div className="verified">
            <img
              src={img1}
              alt="img"
              className="img-pro"
              height="50px"
              width="170px"
            />
            <h1 className="seller-exper">E-Commerce Development</h1>
          </div>
          <div className="profile-seller-from">
            <div className="profile-seller-country">
              <h1 className="pays">From</h1>
              <h1 className="seller-reg">Membre Since</h1>
            </div>
            <div className="profile-seller-country-info">
              <h1 className="pays-info">Algeria</h1>
              <h1 className="seller-reg-info">Membre Since</h1>
            </div>
            <div className="profile-seller-gig">
              <h1 className="resp">Avg. response time</h1>
              <h1 className="deli">Last delivery</h1>
            </div>
            <div className="profile-seller-gig-info">
              <h1 className="resp-info">5 hours</h1>
              <h1 className="deli-info">about 8 hours</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-sell-price">
        <div className="buttons">
          <button className="basic">Basic</button>
          <button className="standard">Standard</button>
          <button className="premium">Premium</button>
        </div>
        <div className="offer-title">
          <h1 className="offer-title-h1">Ready Made Make Money Online Store</h1>
          <h1 className="offer-price">$100</h1>
        </div>
        <p className="offer-desc">
          Includes 3x Ebooks to sell with master resell rights
        </p>
        <div className="delivery">
          <div className="del-time">
            <i class="fa fa-clock" aria-hidden="true"></i>
            <h1 className="time-del">4 Days Delivery</h1>
          </div>
          <div className="check">
          <i class="fa fa-check" aria-hidden="true"></i>
          <h1 className="check-text">4 Pages</h1>
          </div>
          <div className="check">
          <i class="fa fa-check" aria-hidden="true"></i>
          <h1 className="check-text">3 Products</h1>
          </div>
          <div className="check">
          <i class="fa fa-check" aria-hidden="true"></i>
          <h1 className="check-text">1 Plugin/Extension</h1>
          </div>
          <button className="buy-it">Continue ($195)</button>
        </div>
      </div>
    </div>
  );
}

export default GigDisplay;
