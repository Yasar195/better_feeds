import React from "react";
import logo from '../assets/logo.png';
import '../styles/Nav.css';

const Nav = () => {
    return(
        <div className="nav">
            <div className="cntr">
                <img id="logo" src={logo} alt="logo"/>
                <h1>BETTER FEEDS</h1>
                <p>NOTHING BETTER THAN BETTER FEEDS</p>
            </div>
        </div>
    )
}

export default Nav;