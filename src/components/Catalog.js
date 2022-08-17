import React from "react";
import '../styles/Catalog.css';
import pro from '../assets/pro.png';
import plus from '../assets/plus.png';
import pushti from '../assets/pushti.png';
import { FiArrowRight } from 'react-icons/fi';

const Catalog = () => {
    return(
        <div className="cat">
            <div className="images">
                <img src={pro} alt='pro'/>
                <img src={plus} alt="plus"/>
                <img src={pushti} alt="pushti"/>
            </div>
            <div className="view">
                <h1>View more</h1>
                <FiArrowRight/>
            </div>
        </div>
    )
}

export default Catalog;