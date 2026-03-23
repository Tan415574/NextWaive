import React from 'react';

const projects = [
    {
        name: 'Project One',
        description: 'Brief description of what you built and for who.',
        tags: ['Website', 'React'],
        link: 'https://example.com',
    },
    {
        name: 'Project Two',
        description: 'Brief description of what you built and for who.',
        tags: ['AI Automation', 'WhatsApp Bot'],
        link: 'https://example.com',
    },
    {
        name: 'Project Three',
        description: 'Brief description of what you built and for who.',
        tags: ['E-commerce', 'Branding'],
        link: 'https://example.com',
    },
];

export default function Projects() {
    return (
        <section className="projects">
            <div className="container--6xl">
                <div className="projects__header">
                    <h2 className="projects__heading">
                        Previous <span className="ai-accent">Work</span>
                    </h2>
                    <p className="projects__subtext">
                        A selection of projects we've delivered for local businesses.
                    </p>
                </div>
                <div className="projects__grid">
                    {projects.map((p) => (
                        <a
                            key={p.name}
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            className="projects__card"
                        >
                            <div className="projects__card-image" />
                            <div className="projects__card-body">
                                <h3 className="projects__card-title">{p.name}</h3>
                                <p className="projects__card-desc">{p.description}</p>
                                <div className="projects__tags">
                                    {p.tags.map((tag) => (
                                        <span className="projects__tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}