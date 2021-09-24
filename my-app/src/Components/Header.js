import React from 'react'
import Logo from '../assets/Logo.png'
import Navbar from './Navbar'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <>
        <div className="Top-Header">
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
            <ul>
                <li><Link to="/Location"><i className="bi bi-geo-alt-fill"></i>Store Locator</Link></li>
                <li><Link to="/Login"><i className="bi bi-person-fill"></i>Signup/Register</Link></li>
            </ul>
        </div>
        <Navbar/>
        </>
    )
}

export default Header
