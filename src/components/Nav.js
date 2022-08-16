import React from "react";
import logo from '../assets/logo.png';
import '../styles/Nav.css';

const Nav = () => {
    return(
        <div className="nav">
            <div className="links">
                <div className="lf">
                    <h4>Home</h4>
                </div>
                <div className="rg">
                    <h4>Products</h4>
                    <h4>About</h4>
                    <h4>Careers</h4>
                    <h4>Contact</h4>
                </div>
            </div>
            <div className="cntr">
                <img id="logo" src={logo} alt="logo"/>
                <h1>BETTER FEEDS</h1>
                <p>NOTHING BETTER THAN BETTER FEEDS</p>
            </div>
        </div>
    )
}

export default Nav;