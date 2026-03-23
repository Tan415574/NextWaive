import React from 'react';

const stats = [
    { value: '10+',  label: 'Clients Served' },
    { value: '24hr', label: 'Avg Turnaround' },
    { value: '100%', label: 'SA Based' },
    { value: '5★',   label: 'Client Rating' },
];

export default function StatsBar() {
    return (
        <section className="stats">
            <div className="stats__inner">
                {stats.map((s) => (
                    <div className="stats__item" key={s.label}>
                        <span className="stats__value">{s.value}</span>
                        <span className="stats__label">{s.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}