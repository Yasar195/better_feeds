import {useState, useEffect} from "react";
import '../styles/Links.css';
import pushti from '../assets/pushtilogo.png';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const useWindowSize = () =>{
    const [size, setSize] = useState([window.innerWidth])
    useEffect(()=> {
        const handlResize = () => {
            setSize([window.innerWidth])
        }
        window.addEventListener('resize', handlResize)
        return () => {
            window.removeEventListener('resize', handlResize)
        }
    }, [])
    return size;
}


const Links = () => {

    const [width] = useWindowSize();

    const variants = {
        hover: {
            scale: 1.1,
            cursor: 'pointer',
        },
        tap: {
            scale: 0.9,
        }
    }

    const handleContact = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }

    if(width>500){
        return(
            <div className="links">
                <Link to="/" style={{textDecoration: 'none'}}><motion.p variants={variants} whileHover="hover" whileTap="tap">HOME</motion.p></Link>
                <Link to="/products" state={{index: 0}} style={{textDecoration: 'none'}}><motion.p variants={variants} whileHover="hover" whileTap="tap">PRODUCTS</motion.p></Link>
                <img src={pushti} alt="logo"/>
                <Link to="/about" style={{textDecoration: 'none'}}><motion.p variants={variants} whileHover="hover" whileTap="tap">ABOUT</motion.p></Link>
                <motion.p onClick={handleContact} variants={variants} whileHover="hover" whileTap="tap">CONTACT</motion.p>
            </div>
        )
    }
    else{
        return(
            <div className="links">
                <img src={pushti} alt="logo"/>
            </div>
        )
    }
}

export default Links;