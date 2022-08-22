import React, { useEffect, useState } from "react";
import '../styles/Products.css';
import logo from '../assets/logo.png';
import { AiFillHome } from 'react-icons/ai';
import pushti from '../assets/pushtilogo.png';
import product from '../assets/product.png';
import data from './data.json';

const Products = () => {

    const [content, setContent] = useState({"name": "", "description": "", "price": "", "weight": ""})

    const changeHandler = (index) => {
        setContent(data[index])
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
                <div>
                    <AiFillHome/>
                </div>
                <div>
                    <div id="product" onClick={()=>changeHandler(1)}>
                        <img src={pushti} alt="pushti"/>
                        <p>pushti pro</p>
                    </div>
                </div>
                <div>
                    <div id="product" onClick={()=>changeHandler(2)}>
                        <img src={pushti} alt="pushti"/>
                        <p>pushti plus</p>
                    </div>
                </div>
                <div>
                    <div id="product" onClick={()=>changeHandler(0)}>
                        <img src={pushti} alt="pushti"/>
                        <p>pushti</p>
                    </div>
                </div>
                <div>
                    <div id="product" onClick={()=>changeHandler(3)}>
                        <img src={pushti} alt="pushti"/>
                        <p>pushti goat</p>
                    </div>
                </div>
                <div>
                    <div id="product" onClick={()=>changeHandler(4)}>
                        <img src={pushti} alt="pushti"/>
                        <p>layer mash</p>
                    </div>
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
                                <p>Price : 10000</p>
                                <p>Net weight: 10kg</p>
                            </div>
                        </div>
                    </div>
                    <div id="description">
                        <h3>description</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;