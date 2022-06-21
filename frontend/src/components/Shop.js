import React from "react";
import "fontsource-cascadia-mono";
import {  Link  } from "react-router-dom";

export default function Shop() {
    return (
        <div className="dropdown">
            <button className="dropbtn">SHOP</button>
            <div className="dropdown-content">
                <Link to={`/products/Annual-Flowers`}>Annual Flowers</Link>
                <Link to={`/products/Garden-Plants-&-Flowers`}>Garden Plants & Flowers</Link>
                <Link to={`/products/Garden-Supplies-&-Plant-Care`}>Garden Supplies & Plant Care</Link>
            </div>
        </div>
    )
}
