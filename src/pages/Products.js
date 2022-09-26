import React, { useEffect, useState } from "react";
import '../styles/Products.css';
import logo from '../assets/logo.png';
import poultry from '../assets/poultry.png';
import goat from '../assets/goat.png';
import data from './data.json';
import Footer from '../components/Footer';
import Pros from "../components/Pros";
import pro from '../assets/pro.png';
import plus from '../assets/plus.png';
import pushti from '../assets/pushti.png';
import { useLocation } from "react-router-dom";

const Products = () => {

    const [content, setContent] = useState({"id": "","name": "","type": "","img": "", "pillet_size":"","pack_size": "","shelf_life": "", "para1": "","para2": "", "price": "", "weight": "", "heading": "", "benefits": [], "ing_head": "", "ingredients": [], "is_table": false})

    const location = useLocation()
    const { index } = location.state

    const imgs = [pushti, pro, plus, goat, poultry]

    const changeHandler = (index) => {
        setContent(data[index]);
    }

    useEffect(()=> {
        setContent(data[index])
    }, [])

    return(
        <div className="productdiv">
            <div className="brand">
                <img src={logo} alt="logo"/>
                <h2>BETTER FEEDS</h2>
                <p>NOTHING BETTER THAN BETTER FEEDS</p>
            </div>
            <div className="product">
                <div>
                    <Pros handler={changeHandler}/>
                </div>
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
                                <p>Type: {content.type}</p>
                                <p>Pellet size: {content.pillet_size}</p>
                                <p>Pack size: {content.pack_size}</p>
                                <p>Shelf life: {content.shelf_life}</p>
                            </div>
                        </div>
                        {
                            content.is_table && (
                                <div className="details">
                                    <h4>Daily feeding schedule</h4>
                                    <p id="p">Indroduce feed slowly when converting from existing feed (conversion time: 20 days)</p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Particulars</th>
                                                <th>Cows</th>
                                                <th>Buffaloes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>For milk production per litre</td>
                                                <td>400 Grams</td>
                                                <td>500 Grams</td>
                                            </tr>
                                            <tr>
                                                <td>For maintenance</td>
                                                <td>1.5 - 2.0 kg</td>
                                                <td>2.0 - 2.5 kg</td>
                                            </tr>
                                            <tr>
                                                <td>For Pregnancy</td>
                                                <td>2.0 kg</td>
                                                <td>2.0 - 2.5 kg</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )
                        }
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