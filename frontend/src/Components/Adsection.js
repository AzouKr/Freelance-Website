import React from 'react'
import "./Adsection.css";
import slideshow from "../img/slideshow.gif";

function Adsection() {
    return (
        <div>
        <div className="Section">
        <div className="box">
            <h1 className="welcome">Hi Kerimazoukr,</h1>
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
