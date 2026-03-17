import React from "react";

const services = [
    {
        name: 'Website',
        setup: 'R4,500',
        monthly: 'R350',
        notes: '5-page responsive website',
    },
    {
        name: 'AI Automation',
        setup: 'R4,000',
        monthly: 'R400',
        notes: 'WhatsApp + website chatbot + lead capture',
    },
    {
        name: 'Social Media Management',
        setup: 'R2,500',
        monthly: 'R500',
        notes: '8–12 posts / month',
    },
    {
        name: 'E-commerce Store',
        setup: 'R6,000',
        monthly: 'R500',
        notes: 'Payment integration + product setup',
    },
    {
        name: 'Branding',
        setup: 'R1,000',
        monthly: '—',
        notes: 'Logo design, business cards, flyers',
    },
];

export default function Services() {
    return (
        <section id="solutions" className="services">
            <div className="container--6xl">
                <div className="services__header">
                    <h2 className="services__heading">
                        Services &amp; <span className="ai-accent">Packages</span>
                    </h2>
                    <p className="services__subtext">
                        Transparent pricing for high-performance digital tools.
                    </p>
                </div>

                <div className="services__table-wrapper">
                    <table className="services__table">
                        <thead>
                        <tr>
                            <th>Service</th>
                            <th className="center">Setup Fee</th>
                            <th className="center">Monthly Fee</th>
                            <th>Notes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {services.map((row) => (
                            <tr key={row.name}>
                                <td><p>{row.name}</p></td>
                                <td className="price">{row.setup}</td>
                                <td className="monthly">{row.monthly}</td>
                                <td className="notes">{row.notes}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="services__footer">
                    <p>Need a custom bundle? Contact us for a specialized quote.</p>
                    <a
                        href="https://wa.me/27784898868"
                        className="services__custom-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Custom Quote Inquiry{' '}
                        <i className="fas fa-arrow-right" />
                    </a>
                </div>
            </div>
        </section>
    );
}