import React from 'react'
import ListGig from './ListGig'; 
import Adsection from './Adsection';
import "./Section.css";


function Section() {
    return (
        <div>
        <div className="section">
            <ul className="navba">
                <li className="navIt">Graphics & Design</li>
                <li className="navIt">Digital Marketing</li>
                <li className="navIt">Writing & Translation</li>
                <li className="navIt">Video & Animation</li>
                <li className="navIt">Music & Audio</li>
                <li className="navIt">Programming & Tech</li>
            </ul>
        </div>     
        <Adsection></Adsection>
        <ListGig></ListGig>
        </div>
    )
}

export default Section
