import React from 'react'
import "./MainPage.css";
import NavBar from './NavBar';
import Section from './Section';
import { useLocation} from "react-router-dom";


function MainPage() {
    const location = useLocation().state;
    let email = location.email;
    return (
        <div>
            <NavBar props={email}/>
            <Section props={email}/>
        </div>
    )
}

export default MainPage
