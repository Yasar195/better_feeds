import React, { useState } from 'react';
import '../styles/Home.css';
import Nav from '../components/Nav';
import right from '../assets/right.png';
import Catalog from '../components/Catalog';
import organic from '../assets/organic.png';
import pro from '../assets/pro.png';
import plus from '../assets/plus.png';
import pushti from '../assets/pushti.png';
import img1 from '../assets/gal1.png';
import img2 from '../assets/gal2.png';
import img3 from '../assets/gal3.png';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Links from '../components/Links';


const Home = () => {

    const images = [img1, img2, img3]
    const [image, setImage] = useState(images[0])

    const variants = {
        hover: {
            scale: 1.1,
            cursor: 'pointer',
            boxShadow: '0px 0px 20px #00A851'
        },
        tap: {
            scale: 0.9,
        }
    }

    const changeImage = (index) => {
        setImage(images[index])
    }

    return(
        <div className='home'>
            <Nav/>
            <div className='main'>
                <div className='link'>
                    <Links/>
                </div>
                <div className='about cont'>
                    <div className='text'>
                        <h1>WHO WE ARE?</h1>
                        <p>
                            Better feeds private limited is one of the leading names in the industry founded in the year 2019, offering the best in class organic animal feeds under the <span id="spe">PUSHTI</span> lineup. The company is committed to produce and sell <span id="spe">good quality compounded cattle feed and feed suppliments</span> to dairy farmers at affordable rates. the company started it's operations at <span id="spe">palakkad</span>, with the manufacturing of pellet form of cattle feed and over the years this has diversified into other feeds, like poulty feed and goat feed
                        </p>
                        <Link to="about/" style={{textDecoration: 'none'}}><motion.div 
                            whileHover={{
                                scale: 1.1,
                                cursor: 'pointer',
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                            className="btn"><p>Learn  more</p></motion.div></Link>
                    </div>
                    <div className='image'>
                        <img src={right} alt="right"/>
                    </div>
                </div>
                <div className='seller cont'>
                    <h1>OUR BEST SELLERS</h1>
                    <div className='catalog'>
                        <Catalog first={pro} second={plus} third={pushti} link="products/"/>
                    </div>
                </div>
                <div className='about cont'>
                    <div className='text'>
                        <h1>WHAT IS SO <span id="col">SPECIAL?</span></h1>
                        <p>
                            We strive to produce and distribute good quality compounded cattle feed in pillet form in our automated plant.
                        </p>
                        <p>
                            To obtain the quality we need, we plan and implement strict quality control management and continual improvement by use of good quality raw materials, strict manufacturing process, and by ensuring hygienic conditions to ensure our customer's satisfaction. The management and staff are determined and committed to make no compromise in the quality of the feed and balance cattle feed at the lowest price possible to the satisfaction of the customer.
                        </p>
                        <Link to="about/" style={{textDecoration: 'none'}}><motion.div 
                            whileHover={{
                                scale: 1.1,
                                cursor: 'pointer',
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                            className="btn"><p>Learn  more</p></motion.div></Link>
                    </div>
                    <div className='image'>
                        <img src={organic} alt="organic"/>
                    </div>
                </div>
                <div className='gallery cont'>
                    <motion.h1
                    >GALLERY</motion.h1>
                    <div className='catalog'>
                        <img id="mainimg" src={image} alt="main"/>
                        <div className='gall'>
                            <motion.div
                                variants={variants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={()=>changeImage(0)}><img src={img1} alt="img1"/></motion.div>
                            <motion.div
                                variants={variants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={()=>changeImage(1)}><img src={img2} alt="img2"/></motion.div>
                            <motion.div
                                variants={variants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={()=>changeImage(2)}><img src={img3} alt="img3"/></motion.div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;