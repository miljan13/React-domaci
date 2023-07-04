import React from "react";
import {PROIZVODI} from "../../proizvodi";
import { Product } from "./Proizvod";
import './prodavnica.css';

export const Shop = () => {
    return(
        <div className = "shop">
            <div className="shopTitle">
             <h1>Pet Center Shop</h1>
            </div>
            <div className="products">
                {PROIZVODI.map((product)=>(
                <Product data={product}/>))}
            </div>
            </div>
    );
} ;