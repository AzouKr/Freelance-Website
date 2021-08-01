import React from 'react'
import "./MainPage.css";
import NavBar from './NavBar';
import Section from './Section';
import ListGig from './ListGig'; 
import Axios from "axios";
import {Redirect} from 'react-router-dom';
import {useState} from "react";



function MainPage() {
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/api/user/login").then((response) => {
        if(response.data.loggedIn === false){
            return <Redirect to="/signin"/>
        }
    });
    return (
        <div>
            <NavBar/>
            <Section/>
            <ListGig></ListGig>
        </div>
    )
}

export default MainPage
