import React from "react";

const packageFeatures = [
    'Complete 5-Page Website',
    'Custom AI WhatsApp Bot',
    'Automated Lead Management',
    'Social Media & SEO Setup',
];

export default function Package() {
    return (
        <section id="package" className="package">
            <div className="container--5xl" style={{ position: 'relative', zIndex: 10 }}>
                <div className="package__header">
                    <span className="package__badge">Best Value</span>
                    <h2 className="package__heading">The NextWaive Growth Package</h2>
                    <p className="package__subtext">
                        Our full digital transformation suite for maximum business growth.
                    </p>
                </div>

                <div className="package__card">
                    <div className="package__grid">
                        {/* Feature list */}
                        <ul className="package__features">
                            {packageFeatures.map((feat) => (
                                <li key={feat}>
                                    <i className="fas fa-check-circle" />
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        {/* Pricing */}
                        <div className="package__pricing">
                            <div className="package__price">R8,000</div>
                            <p className="package__maintenance">+ R1,000 maintenance / month</p>
                            <a
                                href="https://wa.me/27784898868"
                                className="btn btn--sky btn--sky-lg"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Launch My Business
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}