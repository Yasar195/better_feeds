import React, { useEffect, useState } from "react";
import '../styles/Products.css';
import logo from '../assets/logo.png';
import { AiFillHome } from 'react-icons/ai';
import pushti from '../assets/pushtilogo.png';
import product from '../assets/product.png';
import data from './data.json';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Products = () => {

    const [content, setContent] = useState({"name": "", "description": "", "price": "", "weight": ""})

    const changeHandler = (index) => {
        setContent(data[index])
    }

    const variants = {
        hover: {
            scale: 1.1,
            cursor: 'pointer',
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

    const variable = 0;

    useEffect(()=> {
        setContent(data[1])
    }, [variable])

    return(
        <div className="productdiv">
            <div className="brand">
                <img src={logo} alt="logo"/>
                <h2>BETTER FEEDS</h2>
                <p>NOTHING BETTER THAN BETTER FEEDS</p>
            </div>
            <div className="product">
                <Link to="/"><motion.div
                    whileHover="btnhover"
                    whileTap="tap"
                    variants={variants}
                    className="homebtn">
                    <AiFillHome/>
                </motion.div></Link>
                <div>
                    <motion.div
                        variants={variants}
                        whileHover="hover"
                        whileTap="tap"
                        id="product" onClick={()=>changeHandler(1)}>
                        <img src={pushti} alt="pushti"/>
                        <p>pushti pro</p>
                    </motion.div>
                </div>
                <div>
                    <motion.div 
                        variants={variants}
                        whileTap="tap"
                        whileHover="hover"
                        id="product" onClick={()=>changeHandler(2)}>
                        <img src={pushti} alt="pushti"/>
                        <p>pushti plus</p>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        variants={variants}
                        whileTap="tap"
                        whileHover="hover"
                        id="product" onClick={()=>changeHandler(0)}>
                        <img src={pushti} alt="pushti"/>
                        <p>pushti</p>
                    </motion.div>
                </div>
                <div>
                    <motion.div 
                        variants={variants}
                        whileTap="tap"
                        whileHover="hover"
                        id="product" onClick={()=>changeHandler(3)}>
                        <img src={pushti} alt="pushti"/>
                        <p>pushti goat</p>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                        variants={variants}
                        whileTap="tap"
                        whileHover="hover"
                        id="product" onClick={()=>changeHandler(4)}>
                        <img src={pushti} alt="pushti"/>
                        <p>layer mash</p>
                    </motion.div>
                </div>
            </div>
            <div className="content">
                <div className="title">
                    <h2>{content.name}</h2>
                </div>
                <div className="aboutpro">
                    <div id="price">
                        <img src={product} alt="product"/>
                        <div className="details">
                            <h4>Product details</h4>
                            <div>
                                <p>Price : {content.price}</p>
                                <p>Net weight: {content.weight}</p>
                            </div>
                        </div>
                    </div>
                    <div id="description">
                        <h3>description</h3>
                        <p>{content.description}</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Products;