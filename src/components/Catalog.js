import React from "react";
import '../styles/Catalog.css';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from "framer-motion";

const Catalog = (props) => {

    const first = props.first
    const second = props.second
    const third = props.third

    return(
        <div className="cat">
            <div className="images">
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        cursor: 'pointer'
                    }}
                ><img src={first} alt='pro'/></motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        cursor: 'pointer',
                    }}
                ><img src={second} alt="plus"/></motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        cursor: 'pointer',
                    }}
                ><img src={third} alt="pushti"/></motion.div>
            </div>
            <div className="view">
                    <motion.div
                        whileHover={{
                            cursor: 'pointer',
                            x: 50
                        }}
                        className="viewbtn">
                        <p>View more</p>
                        <FiArrowRight/>
                    </motion.div>
            </div>
        </div>
    )
}

export default Catalog;