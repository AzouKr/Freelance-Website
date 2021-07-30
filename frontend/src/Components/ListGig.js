import React from "react";
import "./ListGig.css";
import img from "../img/Group145.png";

function ListGig() {
  return (
    <div>
      <div className="Gig-list">
          <div class="card" style={{ width: "18rem" }}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="bottom">
                <a href="#" class="btn btn-gig">
                  Go Ordre It
                </a>
                <h1 className="price">STARTING AT $100</h1>
              </div>
          </div>
        </div> 
        <div class="card" style={{ width: "18rem" }}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="bottom">
                <a href="#" class="btn btn-gig">
                  Go Ordre It
                </a>
                <h1 className="price">STARTING AT $100</h1>
              </div>
          </div>
        </div> 
        <div class="card" style={{ width: "18rem" }}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="bottom">
                <a href="#" class="btn btn-gig">
                  Go Ordre It
                </a>
                <h1 className="price">STARTING AT $100</h1>
              </div>
          </div>
        </div> 
        <div class="card" style={{ width: "18rem" }}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="bottom">
                <a href="#" class="btn btn-gig">
                  Go Ordre It
                </a>
                <h1 className="price">STARTING AT $100</h1>
              </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default ListGig;
