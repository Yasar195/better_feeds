import React from "react";
import '../styles/About.css';
import Footer from "../components/Footer";
import logo from '../assets/logo.png';
import { AiFillHome } from 'react-icons/ai';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
    return(
        <div className="aboutdiv">
            <div className="flex">
                <div id="left">
                    <div className="heading">
                        <p>Home</p>
                        <p>&gt;</p>
                        <h2 id="green">About better feeds</h2>
                    </div>
                    <h2 className="subheading" id="green">Who we are?</h2>
                    <p className="para">
                        Better feeds private limited is one of the leading names in the industry founded in the year 2019, offering the best in class organic animal feeds under the PUSHTI lineup. The company is committed to produce and sell good quality compounded cattle feed and feed suppliments to dairy farmers at affordable rates. the company started it's operations at palakkad, with the manufacturing of pellet form of cattle feed and over the years this has diversified into other feeds, like poulty feed and goat feed
                    </p>
                    <p className="para">
                        The PUSHTI lineup consists of Cattle Feed, Goat Feed and Layer Math. The offered range for livestock is inclusive of Pushti, Pushti pro and Pushti plus cattle feeds. All of our products are 100% organic which will help in making the animals healthy and more profitable for the former as it will provide the best Quality milk in higher Quantities.
                    </p>
                    <div className="focus">
                        <h1 id="green">Our vision</h1>
                        <p className="para">
                            To be the best feed manufacturers offering the customers lowest possible prices and great services, with no compromise in quality
                        </p>
                    </div>
                    <h2 className="subheading" id="green">Quality</h2>
                    <p className="para">
                        We strive to produce and distribute good quality compounded cattle feed in pellet form in our automated plant. To obtain the quality we need, we plan and implement strict quality control management and continual improvement by use of good quality raw materials, strict manufacturing process, and by ensuring hygienic conditions to ensure our customers' satisfaction. The management and staff are determined and committed to make no compromise in the quality of the feed and balance cattle feed at the lowest price possible to the satisfaction of customer.
                    </p>
                </div>
                <div id="right">
                    <div className="branding">
                        <img src={logo} alt="logo"/>
                        <h2>BETTER FEEDS</h2>
                        <p>NOTHING BETTER THAN BETTER FEEDS</p>
                    </div>
                    <Link style={{textDecoration: 'none'}} to="/"><motion.div 
                        whileHover={{
                            scale: 1.1,
                            cursor: 'pointer'
                        }}

                        whileTap={{
                            scale: 0.9
                        }}
                        className="backbtn"
                        >
                        <p>BACK TO HOME</p>
                        <AiFillHome color="#00A851" size={'25px'}/>
                    </motion.div></Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;