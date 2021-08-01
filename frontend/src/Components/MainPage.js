import React from 'react'
import "./MainPage.css";
import NavBar from './NavBar';
import Section from './Section';
import ListGig from './ListGig'; 
import {Redirect} from 'react-router-dom';



function MainPage() {
    return (
        <div>
            <NavBar/>
            <Section/>
            <ListGig></ListGig>
        </div>
    )
}

export default MainPage
