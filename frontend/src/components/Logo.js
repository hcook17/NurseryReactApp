import React from "react";
import { Link } from "react-router-dom";
import images from "../logo.png";

export default function Logo() {
    return (
        <Link to={`/`}>
            <img className='logo' src={images} alt="description" />
        </Link >
    )
}