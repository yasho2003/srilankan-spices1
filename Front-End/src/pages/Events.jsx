import React from 'react';
import './Careers.css'; // Reusing the css file

const eventsData = [
    {
        id: 1,
        title: "Free Cookery Class & Workshop",
        description: "Join our expert chefs for a hands-on experience in mastering Sri Lankan spices. learn traditional recipes and modern twists.",
        date: "Coming Soon",
        location: "Colombo Center"
    },
    {
        id: 2,
        title: "Hand Craft Workshops",
        description: "Explore the artistic side of spices with our free hand-craft workshops. Create spice art, scented candles, and more.",
        date: "Monthly",
        location: "Kandy Branch"
    },
    {
        id: 3,
        title: "Annual Cookery Competition",
        description: "Show off your culinary skills! Compete with the best home cooks and win exciting prizes. Categories for all ages.",
        date: "December 2025",
        location: "Galle Face Green"
    }
];

const Events = () => {
    return (
        <div className="events-page">
            <header className="careers-header">
                <h1>Exciting Events</h1>
                <p>Join us for workshops, competitions, and more. Community is at the heart of what we do.</p>
            </header>

            <div className="careers-grid">
                {eventsData.map(event => (
                    <div key={event.id} className="event-card">
                        <h2 className="event-title">{event.title}</h2>
                        <p>{event.description}</p>
                        <hr style={{ margin: '15px 0', border: '0', borderTop: '1px solid #eee' }} />
                        <p><strong>When:</strong> {event.date}</p>
                        <p><strong>Where:</strong> {event.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
