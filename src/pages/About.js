import React, { useEffect, useState } from "react";
import '../styles/About.css';
import Footer from "../components/Footer";
import logo from '../assets/logo.png';
import { AiFillHome } from 'react-icons/ai';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {

    const jsonArray = [{
        "key": "0",
        "heading": "OUR VISION",
        "content": "To be the best feed manufacturers offering the customers lowest possible prices and great services, with no compromise in quality"
    },
    {
        "key": "1",
        "heading": "OUR MISSION",
        "content": "To Serve and develop organic lives and to maintain a closer and healthy relation with the farmers."
    }
    ]

    const [focus, setFocus] = useState(jsonArray[0]);

    useEffect(()=> {
        const interval = setInterval(()=>{
            setFocus(previous => previous.key == 0 ? jsonArray[1]: jsonArray[0])
        }, 5000)

        return ()=> clearInterval(interval);
    }, [])

    return(
        <div className="aboutdiv">
            <div className="flex">
                <div id="left">
                    <div className="heading">
                        <p>Home</p>
                        <p>&gt;</p>
                        <h2 id="green">About better feeds</h2>
                    </div>
                    <h2 className="subheading" id="green">WHO WE ARE?</h2>
                    <p className="para">
                        Better feeds private limited is one of the leading names in the industry founded in the year 2019, offering the best in class organic animal feeds under the <span>PUSHTI lineup</span>. The company is committed to produce and sell <span>good quality compounded cattle feed and feed suppliments</span> to dairy farmers at affordable rates. the company started it's operations at <span>palakkad</span>, with the manufacturing of pellet form of cattle feed and over the years this has diversified into other feeds, like poulty feed and goat feed
                    </p>
                    <p className="para">
                        The PUSHTI lineup consists of <span>Cattle Feed, Goat Feed and Layer Mash</span>. The offered range for livestock is inclusive of <span>Pushti, Pushti pro and Pushti plus</span> cattle feeds. All of our products are <span>100% organic</span> which will help in making the animals healthy and more profitable for the former as it will provide the <span>best Quality milk in higher Quantities</span>.
                    </p>
                    <div className="focus">
                        <h1 id="green">{focus.heading}</h1>
                        <p className="para">{focus.content}</p>
                    </div>
                    <h2 className="subheading" id="green">QUALITY</h2>
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