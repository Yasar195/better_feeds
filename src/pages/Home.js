import React from 'react';
import '../styles/Home.css';
import Nav from '../components/Nav';
import right from '../assets/right.png';
import Catalog from '../components/Catalog';
import organic from '../assets/organic.png';

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
                        <Catalog/>
                    </div>
                </div>
                <div className='about cont'>
                    <div className='text'>
                        <h1>Who is so <span id="spe">special?</span></h1>
                        <p>We are kerala based <span id="spe">cattle feed manufacturers</span></p>
                    </div>
                    <div className='image'>
                        <img src={organic} alt="organic"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;