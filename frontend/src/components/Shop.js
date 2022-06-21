import React from "react";
import "fontsource-cascadia-mono";
import {  Link  } from "react-router-dom";

export default function Shop() {
    return (
        <div className="dropdown">
            <button className="dropbtn">SHOP</button>
            <div className="dropdown-content">
                <Link reloadDocument to={`/products/Annual-Flowers`}>Annual Flowers</Link>
                <Link reloadDocument to={`/products/Garden-Plants-&-Flowers`}>Garden Plants & Flowers</Link>
                <Link reloadDocument to={`/products/Garden-Supplies-&-Plant-Care`}>Garden Supplies & Plant Care</Link>
            </div>
        </div>
    )
}
