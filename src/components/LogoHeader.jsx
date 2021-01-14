import React from 'react';
import "./css/LogoHeader.css"
import logo from "./assets/Asset 1.png"
import { Link } from 'react-router-dom';
function LogoHeader() {
    return (
        <div className="logoHeader">
               <Link to="/"> <img src={logo} className="logoHeader__img" alt=""/></Link> 
        </div>
    )
}

export default LogoHeader
