import React from "react";

export default function Booking() {
    return (
        <section id="book" className="booking">
            <div className="container--4xl booking__inner">
                <h2 className="booking__heading">
                    Book a <span className="ai-accent">Strategy Session</span>
                </h2>
                <p className="booking__subtext">
                    Select a time below to chat about your project. Experience our
                    automated booking system in action.
                </p>

                <div className="booking__iframe-wrapper">
                    <iframe
                        src="https://calendly.com/ansara-tanit/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=0ea5e9"
                        title="Book a strategy session"
                    />
                </div>

                <p className="booking__powered">
                    <i className="fas fa-robot" />
                    Powered by NextWaive Automation
                </p>
            </div>
        </section>
    );
}