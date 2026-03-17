import React from "react";

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="footer__inner">
                <h2 className="footer__heading">
                    Ready to <span className="underline">Waive</span> manual work?
                </h2>

                <ul className="footer__contacts">
                    <li>
                        <a href="mailto:ansara.tanit@gmail.com">ansara.tanit@gmail.com</a>
                    </li>
                    <li>
                        <a href="tel:0784898868">078 489 8868</a>
                    </li>
                </ul>

                <div className="footer__bottom">
                    <p>&copy; 2026 NextWaive Tech Solutions. Founded by Tanit Ansara.</p>
                    <ul className="footer__nav">
                        <li>
                            <a href="https://wa.me/27784898868" target="_blank" rel="noreferrer">
                                WhatsApp
                            </a>
                        </li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#solutions">Services</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}