import React from "react";
import '../styles/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
    return(
        <footer>
            <div className='div'>
                <div id="im">
                    <img src={logo} alt="logo"/>
                </div>
                <div className='social'>
                    <h2>Contact</h2>
                    <div className='grid'>
                        <div className='media mail'>
                            <p>MAIL</p>
                        </div>
                        <div className='media insta'>
                            <p>INSTAGRAM</p>
                        </div>
                        <div className='media fb'>
                            <p>FACEBOOK</p>
                        </div>
                        <div className='media whats'>
                            <p>WHATSAPP</p>
                        </div>
                        <div className='media share'>
                            <p>SHARE</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div sec'>
                <div>
                    <h2>Location</h2>
                    <p>
                        we are kerala based
                    </p>
                </div>
                <div>
                    <h2>Careers</h2>
                    <p>Know more about current job openings at  better feeds</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;