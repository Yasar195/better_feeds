import React from "react";
import '../styles/Catalog.css';
import { FiArrowRight } from 'react-icons/fi';

const Catalog = (props) => {

    const first = props.first
    const second = props.second
    const third = props.third

    return(
        <div className="cat">
            <div className="images">
                <img src={first} alt='pro'/>
                <img src={second} alt="plus"/>
                <img src={third} alt="pushti"/>
            </div>
            <div className="view">
                <h1>View more</h1>
                <FiArrowRight/>
            </div>
        </div>
    )
}

export default Catalog;