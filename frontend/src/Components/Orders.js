import React from "react";
import "./Orders.css";
import NavBar from "./NavBar";
import Section from "./Section";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function Orders() {
  let history = useHistory();
  const [info, setinfo] = useState([]);
  const [order, setorder] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/user/login").then((response) => {
      if (response.data.loggedIn === false) {
        history.push("/signin");
      } else {
        setinfo(response.data.user);
      }
    });
  }, []);

  /**************************************** Find all orders ********************/
  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.post("http://localhost:3001/api/findorderAll", {
      email: info.email,
    }).then((response) => {
      setorder(response.data);
    });
  }, []);


  function display() {
    return order.map((item) => {
        var HtmlToReactParser = require("html-to-react").Parser;
        var htmlToReactParser = new HtmlToReactParser();
        var reactElement = htmlToReactParser.parse(item.description);
      return (
        <div className="order-box">
          <img
            className="order-image"
            alt="profile"
            width="150px"
            src={info.image}
          />
          <h1 className="order-seller">{info.username}</h1>
          <h1 className="order-seller-email">{info.email}</h1>
          <h1 className="order-title-subject">Subject :</h1>
          <h1 className="order-title">asda sdfsdf</h1>
          <p className="order-para">{reactElement}</p>
        </div>
      );
    });
  }

  return (
    <div>
      <NavBar />
      <Section />
      <div className="list-orders">
      {display()}
      </div>
    </div>
  );
}

export default Orders;