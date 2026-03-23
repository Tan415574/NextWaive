import React from 'react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Projects from '../components/Projects';

export default function Home() {
    return (
        <>
            <Hero />
            <StatsBar />
            <Projects />
        </>
    );
}