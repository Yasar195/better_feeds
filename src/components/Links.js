import React from "react";
import '../styles/Links.css';
import pushti from '../assets/pushtilogo.png';

const Links = () => {
    return(
        <div className="links">
            <h3>HOME</h3>
            <h3>PRODUCTS</h3>
            <img src={pushti} alt="logo"/>
            <h3>ABOUT</h3>
            <h3>CONTACT</h3>
        </div>
    )
}

export default Links;