import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pushti from '../assets/pushtilogo.png';
import { AiFillHome } from 'react-icons/ai';
import '../styles/Pro.css'


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

const Pros = (props) => {

    const [width] = useWindowSize();

    const handler = props.handler;

    const changeHandler = (event) => {
        handler(event.target.value);
    }

    const variants = {
        hover: {
            scale: 1.1,
            cursor: 'pointer',
            boxShadow: "0px 3px 50px rgba(0, 168, 81, 0.3)",
        },
        tap: {
            scale:0.9,
        },
        btnhover:{
            scale: 1.1,
            cursor: 'pointer',
            backgroundColor: 'white',
            color: '#00A851'
        }
    }

    const options = [
        {value: '0', text: 'Pushti'},
        {value: '1', text: 'Pushti Pro'},
        {value: '2', text: 'Pushti plus'},
        {value: '3', text: 'Pushti goat'},
        {value: '4', text: 'Layer mash'},
    ];

    if(width>=800){
        return(
            <div className="pros">
                <div>
                    <Link to="/"><motion.div
                        whileHover="btnhover"
                        whileTap="tap"
                        variants={variants}
                        className="homebtn">
                        <AiFillHome/>
                    </motion.div></Link>
                </div>
                    <div>
                        <motion.div
                            variants={variants}
                            whileHover="hover"
                            whileTap="tap"
                            id="product"
                            onClick={()=>handler(1)}>
                            <img src={pushti} alt="pushti"/>
                        </motion.div>
                        <p>pushti pro</p>
                    </div>
                    <div>
                        <motion.div 
                            variants={variants}
                            whileTap="tap"
                            whileHover="hover"
                            id="product"
                            onClick={()=>handler(2)}>
                            <img src={pushti} alt="pushti"/>
                        </motion.div>
                        <p>pushti plus</p>
                    </div>
                    <div>
                        <motion.div
                            variants={variants}
                            whileTap="tap"
                            whileHover="hover"
                            id="product"
                            onClick={()=>handler(0)}>
                            <img src={pushti} alt="pushti"/>
                        </motion.div>
                        <p>pushti</p>
                    </div>
                    <div>
                        <motion.div 
                            variants={variants}
                            whileTap="tap"
                            whileHover="hover"
                            id="product"
                            onClick={()=>handler(3)}>
                            <img src={pushti} alt="pushti"/>
                        </motion.div>
                        <p>pushti goat</p>
                    </div>
                    <div>
                        <motion.div
                            variants={variants}
                            whileTap="tap"
                            whileHover="hover"
                            id="product"
                            onClick={()=>handler(4)}>
                            <img src={pushti} alt="pushti"/>
                        </motion.div>
                        <p>layer mash</p>
                    </div>
            </div>
        )
    }
    else{
        return(
            <div className="pros">
                <Link to="/"><motion.div
                        whileHover="btnhover"
                        whileTap="tap"
                        variants={variants}
                        className="homebtn">
                    <AiFillHome/>
                </motion.div></Link>
                <div className="drop">
                    <select onChange={changeHandler}>
                    {
                        options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                    ))}
                    </select>
                </div>
            </div>
        )
    }
}

export default Pros;