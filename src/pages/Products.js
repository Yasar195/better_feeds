import React, { useEffect, useState } from "react";
import '../styles/Products.css';
import logo from '../assets/logo.png';
import product from '../assets/product.png';
import data from './data.json';
import Footer from '../components/Footer';
import Pros from "../components/Pros";

const Products = () => {

    const [content, setContent] = useState({"name": "","type": "", "pillet_size":"","pack_size": "","shelf_life": "", "description": "", "price": "", "weight": ""})

    const changeHandler = (index) => {
        setContent(data[index])
    }

    useEffect(()=> {
        setContent(data[1])
    }, [])

    return(
        <div className="productdiv">
            <div className="brand">
                <img src={logo} alt="logo"/>
                <h2>BETTER FEEDS</h2>
                <p>NOTHING BETTER THAN BETTER FEEDS</p>
            </div>
            <div className="product">
                <Pros handler={changeHandler}/>
            </div>
            <div className="content">
                <div className="title">
                    <h2>{content.name}</h2>
                </div>
                <div className="aboutpro">
                    <div id="price">
                        <div className="bagimg">
                            <img id="bag" src={product} alt="product"/>
                        </div>
                        <div className="details">
                            <h4>Product details</h4>
                            <div>
                                <p>Price : {content.price}</p>
                                <p>Net weight: {content.weight}</p>
                                <p>Type: {content.type}</p>
                                <p>Pellet size: {content.pillet_size}</p>
                                <p>Pack size: {content.pack_size}</p>
                                <p>Shelf life: {content.shelf_life}</p>
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