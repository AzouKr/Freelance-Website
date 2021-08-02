import React from 'react'
import "./MainPage.css";
import NavBar from './NavBar';
import Section from './Section';
import ListGig from './ListGig'; 
import {Redirect} from 'react-router-dom';
import Adsection from './Adsection';




function MainPage() {
    return (
        <div>
            <NavBar/>
            <Section/>
            <Adsection/>
            <ListGig></ListGig>
        </div>
    )
}

export default MainPage
