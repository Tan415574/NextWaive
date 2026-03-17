import React from "react";

export default function Hero() {
    return (
        <header className="hero">
            <div className="hero__inner">
                <span className="hero__badge">Modernizing South African SMBs</span>

                <h1 className="hero__heading">
                    Websites that sell. <br />
                    <span className="ai-accent">AI that automates.</span>
                </h1>

                <p className="hero__subtext">
                    Helping local businesses save time and grow using modern digital tools
                    that work 24/7 on autopilot.
                </p>

                <div className="hero__actions">
                    <a href="#solutions" className="btn btn--dark">Our Services</a>
                    <a href="#book" className="btn btn--outline">Book a Strategy Call</a>
                </div>
            </div>
        </header>
    );
}