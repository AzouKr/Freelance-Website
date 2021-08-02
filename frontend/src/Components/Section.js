import React from 'react'
import "./Section.css";
import { useHistory } from "react-router-dom";



function Section() {
    let history = useHistory();
    const graphic = (e) => {
        e.preventDefault();
        history.push({
            pathname: "/main/gigs",
            state: {type: "Graphics & Design"},
            });
      }
      const digital = (e) => {
        e.preventDefault();
        history.push({
          pathname: "/main/gigs",
          state: {type: "Digital Marketing"},
          });
      }
      const writing = (e) => {
        e.preventDefault();
        history.push({
          pathname: "/main/gigs",
          state: {type: "Writing & Translation"},
          });
      }
      const video = (e) => {
        e.preventDefault();
        history.push({
          pathname: "/main/gigs",
          state: {type: "Video & Animation"},
          });
      }
      const music = (e) => {
        e.preventDefault();
        history.push({
          pathname: "/main/gigs",
          state: { type: "Music & Audio"},
          });
      }
      const programming = (e) => {
        e.preventDefault();
        history.push({
          pathname: "/main/gigs",
          state: {type: "Programming & Tech"},
          });
      }
    return (
        <div>
        <div className="section">
            <ul className="navba">
                <li className="navIt" onClick={graphic}>Graphics & Design</li>
                <li className="navIt" onClick={digital}>Digital Marketing</li>
                <li className="navIt" onClick={writing}>Writing & Translation</li>
                <li className="navIt" onClick={video}>Video & Animation</li>
                <li className="navIt" onClick={music}>Music & Audio</li>
                <li className="navIt" onClick={programming}>Programming & Tech</li>
            </ul>
        </div>     
        </div>
    )
}

export default Section
