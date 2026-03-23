import React from "react";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container--6xl">
                <div className="about__grid">
                    {/* Image */}
                    <div className="about__image-wrapper">
                        <div className="about__image-frame">
                            <img src={process.env.PUBLIC_URL + "/Images/TanitA.jpg"} alt="Tanit Ansara" />
                        </div>
                        <div className="about__name-card">
                            <h3>Tanit Ansara</h3>
                            <p>Founder &amp; Lead Dev</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="about__content">
                        <h2 className="about__heading">
                            Two UCT students
                            on a mission. <br />
                            <span className="ai-accent">Scaled for Business.</span>
                        </h2>

                        <div className="about__body">
                            <p>
                                We're Tanit and Tristan, both studying Information Systems at the{' '}
                                <strong>University of Cape Town</strong>.
                                We started NextWaive because we kept seeing local businesses stuck with outdated tech,
                                no online presence, and hours wasted on stuff that could easily be automated.
                            </p>
                            <p>
                                So we decided to do something about it.
                                We combine <strong>modern web development</strong> with
                                <strong>AI and automation</strong> to build tools that actually work for your business.
                                Not just a pretty website, but systems that save you real time and bring in real customers.
                            </p>
                            <p className="about__quote">
                                "Technology should simplify your business, not complicate it."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}