import React, { useState } from 'react';
import './LocationsAndHours.css';

const LocationsAndHours = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const locations = [
        {
            id: 1,
            name: "One Galle Face Shopping Mall",
            city: "Colombo",
            hours: "8:00 AM - 10:00 PM",
            description: "Experience our flagship store in the heart of Colombo."
        },
        {
            id: 2,
            name: "Kandy City Centre",
            city: "Kandy",
            hours: "8:00 AM - 9:00 PM",
            description: "Visit us in the hill capital at the premier Kandy City Centre."
        },
        {
            id: 3,
            name: "Galle City Center",
            city: "Galle",
            hours: "9:00 AM - 10:00 PM",
            description: "Located in the historic coastal city of Galle."
        }
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        
        const subject = encodeURIComponent(`Message from ${name} - Website Contact`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

       
        window.location.href = `mailto:info@srilankanspices.com?subject=${subject}&body=${body}`;

        alert("Preparing to send your message via your email client...");
    };

    return (
        <div className="locations-page">
            <header className="locations-hero">
                <h1>Our Locations & Hours</h1>
                <p>Find a store near you and explore our premium collection of spices and essential oils.</p>
            </header>

            <div className="locations-container">
                {/* Map Section */}
                <section className="map-section">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.078426002986!2d79.8436575!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25923c6c0ca37%3A0xe37b8c7336f32230!2sOne%20Galle%20Face%20Mall!5e0!3m2!1sen!2slk!4v1703328000000!5m2!1sen!2slk"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="One Galle Face Location"
                    ></iframe>
                </section>

                {/* Locations Grid */}
                <section className="locations-grid">
                    {locations.map(location => (
                        <div key={location.id} className="location-card">
                            <h2>{location.name}</h2>
                            <h3 className="city-name">{location.city}</h3>
                            <div className="hours-container">
                                <span className="label">Open Hours:</span>
                                <span className="time">{location.hours}</span>
                            </div>
                            <p>{location.description}</p>
                        </div>
                    ))}
                </section>

                {/* Contact Section */}
                <section className="contact-section">
                    <div className="contact-container">
                        <h2>Send Us a Message</h2>
                        <p>Have questions? Reach out to us directly via email.</p>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="How can we help you today?"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-send">Send Message</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LocationsAndHours;
