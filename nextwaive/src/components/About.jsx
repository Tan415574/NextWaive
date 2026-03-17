import React from "react";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container--6xl">
                <div className="about__grid">
                    {/* Image */}
                    <div className="about__image-wrapper">
                        <div className="about__image-frame">
                            <img src="/Images/TanitA.jpg" alt="Tanit Ansara" />
                        </div>
                        <div className="about__name-card">
                            <h3>Tanit Ansara</h3>
                            <p>Founder &amp; Lead Dev</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="about__content">
                        <h2 className="about__heading">
                            Built at UCT. <br />
                            <span className="ai-accent">Scaled for Business.</span>
                        </h2>

                        <div className="about__body">
                            <p>
                                I'm Tanit, a student at the{' '}
                                <strong>University of Cape Town</strong> and the founder of
                                NextWaive. I saw too many local businesses struggling with
                                outdated tech, so I decided to bridge the gap.
                            </p>
                            <p>
                                I combine modern web architecture with cutting-edge AI to create
                                systems that don't just "look good" — they actively save you
                                hours of manual work every single week.
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