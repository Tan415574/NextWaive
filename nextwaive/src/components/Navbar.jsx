import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar__inner">
                <div className="navbar__logo">
                    Next<span className="ai-accent">Waive</span>
                </div>

                <ul className="navbar__links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#solutions">Services</a></li>
                    <li><a href="#package">Full Package</a></li>
                    <li><a href="#book" className="active">Book a Call</a></li>
                </ul>

                <a
                    href="https://wa.me/27784898868"
                    className="navbar__cta"
                    target="_blank"
                    rel="noreferrer"
                >
                    WhatsApp Me
                </a>
            </div>
        </nav>
    );
}