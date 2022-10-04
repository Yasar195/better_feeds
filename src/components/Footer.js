import React from "react";
import '../styles/Footer.css';
import logo from '../assets/logo.png';
import { FaFacebookSquare, FaWhatsappSquare, FaShareAltSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

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
                            <SiGmail color="#FF5D5D" size={'15px'}/>
                            <p>MAIL</p>
                        </div>
                        <a target="_blank" href="https://www.facebook.com/BetterFeedsPage"><div className='media fb'>
                            <FaFacebookSquare color="#6184FF" size={'15px'}/>
                            <p>FACEBOOK</p>
                        </div></a>
                        <a href="https://wa.me/919048952682" target="_blank">
                            <div className='media whats'>
                                <FaWhatsappSquare color="#00A851" size={'15px'}/>
                                <p>WHATSAPP</p>
                            </div>
                        </a>
                        <div className='media share'>
                            <FaShareAltSquare color="#454545" size={'15px'}/>
                            <p>SHARE</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div sec'>
                <div>
                    <h2>Location</h2>
                    <p id="data">
                        Better Feeds PVT. LTD.
                        Chullimada, Kanjikode,
                        (PO) Palakkad 
                        Pin - 678621
                    </p>
                </div>
                <div>
                    <h2>Careers</h2>
                    <a href="https://wa.me/919048952682?text=Hi,%20I%20want%20to%20join%20as%20*Distributor*%0AName%20:%20%0ADistrict%20:%20%0A" target="_blank"><p id="data">Join as Distributor</p></a>
                    <a href="https://wa.me/919048952682?text=Hi" target="_blank">
                        <p id="data">Join as employee</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;