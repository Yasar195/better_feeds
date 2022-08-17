import React from 'react';
import '../styles/Home.css';
import Nav from '../components/Nav';

const Home = () => {
    return(
        <div className='home'>
            <Nav/>
            <div className='main'>
                <div className='about'>
                    <div className='text'>
                        <h1>Who we are?</h1>
                        <p>We are kerala based cattle feed manufacturers</p>
                    </div>
                    <div className='image'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;