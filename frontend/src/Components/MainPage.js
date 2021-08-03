import React from 'react'
import "./MainPage.css";
import NavBar from './NavBar';
import Section from './Section';
import ListGig from './ListGig'; 
import Adsection from './Adsection';
import Footer from './Footer';




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
