import React from 'react';
import '../styles/Home.css';
import Nav from '../components/Nav';
import right from '../assets/right.png';
import Catalog from '../components/Catalog';
import organic from '../assets/organic.png';
import pro from '../assets/pro.png';
import plus from '../assets/plus.png';
import pushti from '../assets/pushti.png';
import dummy from '../assets/dummy.png';
import logo from '../assets/logo.png';

const Home = () => {
    return(
        <div className='home'>
            <Nav/>
            <div className='main'>
                <div className='about cont'>
                    <div className='text'>
                        <h1>Who we are?</h1>
                        <p>We are kerala based cattle feed manufacturers</p>
                        <div className="btn"><p>Learn  more</p></div>
                    </div>
                    <div className='image'>
                        <img src={right} alt="right"/>
                    </div>
                </div>
                <div className='seller cont'>
                    <h1>Our best sellers</h1>
                    <div className='catalog'>
                        <Catalog first={pro} second={plus} third={pushti}/>
                    </div>
                </div>
                <div className='about cont'>
                    <div className='text'>
                        <h1>What is so <span id="spe">special?</span></h1>
                        <p>We are kerala based <span id="spe">cattle feed manufacturers</span></p>
                    </div>
                    <div className='image'>
                        <img src={organic} alt="organic"/>
                    </div>
                </div>
                <div className='gallery cont'>
                    <h1>Gallery</h1>
                    <div className='catalog'>
                        <Catalog first={dummy} second={dummy} third={dummy}/>
                    </div>
                </div>
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
            </div>
        </div>
    )
}

export default Home;