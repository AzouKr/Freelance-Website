import React from 'react'
import Adsection from './Adsection';
import "./Section.css";
import { useHistory } from "react-router-dom";



function Section({props}) {

    let history = useHistory();
    const useremail=props;

    const graphic = (e) => {
        e.preventDefault();
        history.push({
            pathname: "/main/gigs",
            state: {email: useremail, type: "Graphics & Design"},
            });
      }
      const digital = (e) => {
        e.preventDefault();
        history.push({
          pathname: "/main/gigs",
          state: {email: useremail, type: "Digital Marketing"},
          });
      }
      const writing = (e) => {
        e.preventDefault();
        history.push({
          pathname: "/main/gigs",
          state: {email: useremail, type: "Writing & Translation"},
          });
      }
      const video = (e) => {
        e.preventDefault();
        history.push({
          pathname: "/main/gigs",
          state: {email: useremail, type: "Video & Animation"},
          });
      }
      const music = (e) => {
        e.preventDefault();
        history.push({
          pathname: "/main/gigs",
          state: {email: useremail, type: "Music & Audio"},
          });
      }
      const programming = (e) => {
        e.preventDefault();
        history.push({
          pathname: "/main/gigs",
          state: {email: useremail, type: "Programming & Tech"},
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
        <Adsection prop={useremail}/>
        </div>
    )
}

export default Section
