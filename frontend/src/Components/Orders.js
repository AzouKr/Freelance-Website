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

    /**************** find Reciever informations ************************/

    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/api/user/login").then((response) => {
      if (response.data.loggedIn === false) {
        history.push("/signin");
      } else {
        setinfo(response.data.user);
      }

    /**************** find his Gigs ************************/

      Axios.post("http://localhost:3001/api/findorderAll", {
      email: response.data.user.email,
    }).then((result) => {
      setorder(result.data);
    });
    });
  }, []);


  function display() {
    return order.map((item) => {
      const finish = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/api/deleteorder", {
          subject: item.subject,
        });
        window.location.reload();
      };
        var HtmlToReactParser = require("html-to-react").Parser;
        var htmlToReactParser = new HtmlToReactParser();
        var reactElement = htmlToReactParser.parse(item.description);
      return (
        <div className="order-box">
          <img
            className="order-image"
            alt="profile"
            width="150px"
            src={item.image}
          />
          <h1 className="order-seller">{item.username}</h1>
          <h1 className="order-seller-email">{item.sendemail}</h1>
          <h1 className="order-title-subject">Subject :</h1>
          <h1 className="order-title">{item.subject}</h1>
          <p className="order-para">{reactElement}</p>
          <button className="finish" onClick={finish}>Finish</button>
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
