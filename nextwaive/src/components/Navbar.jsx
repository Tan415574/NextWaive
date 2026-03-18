import React from 'react';
import { Link } from 'react-router-dom';
import StaggeredMenu from './StaggeredMenu';

const menuItems = [
    { label: 'Home',     ariaLabel: 'Go to home page',     link: '/' },
    { label: 'About',    ariaLabel: 'Learn about us',       link: '/about' },
    { label: 'Services', ariaLabel: 'View our services',    link: '/services' },
    { label: 'Book',     ariaLabel: 'Book a strategy call', link: '/book' },
];

const socialItems = [
    { label: 'WhatsApp', link: 'https://wa.me/27784898868' },
    { label: 'Email',    link: 'mailto:ansara.tanit@gmail.com' },
];

export default function Navbar() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 50, pointerEvents: 'none' }}>
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#0f172a"
                openMenuButtonColor="#0f172a"
                changeMenuColorOnOpen={true}
                colors={['#bae6fd', '#0ea5e9']}
                logoUrl={process.env.PUBLIC_URL + "/Images/NextWaiveLogo.png"}
                accentColor="#0ea5e9"
                isFixed={false}
                closeOnClickAway={true}
            />
        </div>
    );
}