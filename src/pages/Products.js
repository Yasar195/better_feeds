import React, { useEffect, useState } from "react";
import '../styles/Products.css';
import logo from '../assets/logo.png';
import product from '../assets/product.png';
import data from './data.json';
import Footer from '../components/Footer';
import Pros from "../components/Pros";
import pro from '../assets/pro.png';
import plus from '../assets/plus.png';
import pushti from '../assets/pushti.png';

const Products = () => {

    const [content, setContent] = useState({"id": "","name": "","type": "","img": "", "pillet_size":"","pack_size": "","shelf_life": "", "para1": "","para2": "", "price": "", "weight": "", "heading": "", "benefits": [], "ing_head": "", "ingredients": []})

    const imgs = [pushti, pro, plus, product, product]

    const changeHandler = (index) => {
        setContent(data[index]);
    }

    useEffect(()=> {
        setContent(data[0])
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
                            <img id="bag" src={imgs[content.id]} alt="product"/>
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
                        <p>{content.para1}</p>
                        <p>{content.para2}</p>
                        <p>{content.ing_head}</p>
                        <ul>
                            {
                                content.ingredients.map((ing, index)=>{
                                    return (
                                        <li key={index}>{ing}</li>
                                    )
                                })
                            }
                        </ul>
                        <p>{content.heading}</p>
                        <ul>
                            {
                                content.benefits.map((ben, index)=>{
                                    return(
                                        <li key={index}>{ben}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Products;