import '../styles/Catalog.css';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Catalog = (props) => {

    const first = props.first
    const second = props.second
    const third = props.third
    const link = props.link

    return(
        <div className="cat">
            <div className="images">
                <Link to={'/products'} state={{index: 1}}><motion.div
                    whileHover={{
                        scale: 1.1,
                        cursor: 'pointer'
                    }}
                ><img src={first} alt='pro'/></motion.div></Link>
                <Link to={'/products'} state={{index: 2}}><motion.div
                    whileHover={{
                        scale: 1.1,
                        cursor: 'pointer',
                    }}
                ><img src={second} alt="plus"/></motion.div></Link>
                <Link to={'/products'} state={{index: 0}}><motion.div
                    whileHover={{
                        scale: 1.1,
                        cursor: 'pointer',
                    }}
                ><img src={third} alt="pushti"/></motion.div></Link>
            </div>
            <div className="view">
                    <Link to={link} state={{index: 0}} style={{textDecoration: 'none'}}><motion.div
                        whileHover={{
                            cursor: 'pointer',
                            backgroundColor: 'white',
                            color: 'black',
                        }}
                        className="viewbtn">
                        <FiArrowRight/>
                    </motion.div></Link>
            </div>
        </div>
    )
}

export default Catalog;