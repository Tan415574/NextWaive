import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="footer__inner">
                <div className="footer__top">
                    <div className="footer__brand">
                        <div className="footer__logo">Next<span>Waive</span></div>
                        <p className="footer__tagline">Helping South African businesses save time and grow with modern digital tools.</p>
                    </div>
                    <ul className="footer__contacts">
                        <li><a href="mailto:ansara.tanit@gmail.com"><i className="fas fa-envelope" /> ansara.tanit@gmail.com</a></li>
                        <li><a href="tel:0784898868"><i className="fas fa-phone" /> 078 489 8868</a></li>
                        <li><a href="https://wa.me/27784898868" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp" /> WhatsApp</a></li>
                    </ul>
                </div>
                <div className="footer__bottom">
                    <p>&copy; 2026 NextWaive Tech Solutions. Founded by Tanit Ansara.</p>
                    <ul className="footer__nav">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/book">Book a Call</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}