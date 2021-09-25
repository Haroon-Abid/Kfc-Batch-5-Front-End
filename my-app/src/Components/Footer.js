import React from 'react'
import footerlogo from '../assets/footer-logo.png'
import googleplay from '../assets/google-play.png'
import appstore from '../assets/app-store.png'
const Footer = () => {
    return (
        <div className="Footer">
            <hr />
            <div className="Upper-Footer mt-4 mb-4">
                <img src = {footerlogo} alt=""/>
            </div>
            <div className="Lower-Footer">
                <ul>
                    <li><h5>Infromation</h5></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Mitao Bhook</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><h5>Careers</h5></li>
                </ul>
                <ul>
                    <li><h5>Food</h5></li>
                    <li><a href="">Our Secret Recipe</a></li>
                </ul>
                <ul>
                    <li><h5>Locations</h5></li>
                    <li><a href="">Find a store</a></li>
                </ul>
                <ul>
                    <li><h5>Get in Touch</h5></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Join Us</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                </ul>
                <ul>
                    <li><a href=""><img src={googleplay} alt="" /></a></li>
                    <li><a href=""><img src={appstore} alt="" /></a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Footer
