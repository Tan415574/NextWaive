import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar__inner">
                <Link to="/" className="navbar__logo">
                    Next<span className="ai-accent">Waive</span>
                </Link>

                <ul className="navbar__links">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/services#package">Full Package</Link></li>
                    <li><Link to="/book" className="active">Book a Call</Link></li>
                </ul>

                <a href="https://wa.me/27784898868" className="navbar__cta"
                   target="_blank" rel="noreferrer">
                    WhatsApp Me
                </a>
            </div>
        </nav>
    );
}