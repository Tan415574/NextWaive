import React from 'react';
import { Link } from 'react-router-dom';
import TextType from './TextType';

export default function Hero() {
    return (
        <header className="hero">
            <div className="hero__inner">
                <span className="hero__badge">Modernizing South African SMBs</span>

                <h1 className="hero__heading">
                    <TextType
                        text={[
                            'Websites that sell.',
                            'AI that automates.',
                        ]}
                        typingSpeed={60}
                        deletingSpeed={40}
                        pauseDuration={2000}
                        showCursor={true}
                        cursorCharacter="|"
                        cursorBlinkDuration={0.5}
                        loop={true}
                    />
                </h1>

                <p className="hero__subtext">
                    Helping local businesses save time and grow using modern digital tools
                    that work 24/7 on autopilot.
                </p>

                <div className="hero__actions">
                    <Link to="/services" className="btn btn--dark">Our Services</Link>
                    <Link to="/book" className="btn btn--outline">Book a Strategy Call</Link>
                </div>
            </div>
        </header>
    );
}