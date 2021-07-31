import React from "react";
import "./ListGig.css";
import {useState} from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';


function ListGig() {

  const [info, setinfo] = useState([]);

    Axios.get("http://localhost:3001/api/allgigs").then((response) => {
      setinfo(response.data);
    });


    function display() {
      return info.map((item) => {
        return (
          <div class="My-card" style={{ width: "18rem" }}>
            <img src={item.image1} class="card-img-top" alt="..."  height="180"/>
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">
              {item.description.substring(0, 50)}
              </p>
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
      <div className="Gig-list">
      {display()}  
      </div>
    </div>
  );
}

export default ListGig;
