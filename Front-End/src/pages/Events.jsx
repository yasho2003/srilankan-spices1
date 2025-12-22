import React, { useState } from 'react';
import './Careers.css';
import handCraftImg from '../assets/hand_craft_workshop.jpg';
import cookingCompetitionImg from '../assets/Cooking-competition.jpg';


const eventsData = [
    {
        id: 1,
        title: "Free Cookery Class & Workshop",
        description: "Join our expert chefs for a hands-on experience in mastering Sri Lankan spices. learn traditional recipes and modern twists.",
        date: "Coming Soon",
        location: "Colombo City Center",
        time: "9:00 AM - 5:00 PM",
        image: "src/assets/cokkingworkshop.jpg"
    },
    {
        id: 2,
        title: "Hand Craft Workshop for free",
        description: "Explore the artistic side of spices with our free hand-craft workshops. Create spice art, draw manela art, paint Totebags,laugh with us ",
        date: "Monthly",
        location: "Kandy Branch",
        time: "10:00 AM - 5:00 PM",
        image: handCraftImg,
        details: " Our Handcraft Workshop, held last month, was a wonderful celebration of creativity and tradition. Participants had the opportunity to learn traditional handcraft techniques, work with authentic materials, and create their own handmade items under the guidance of skilled artisans. The event was filled with creativity, hands-on learning, and meaningful interactions, leaving attendees inspired and with a deeper appreciation for local craftsmanship.",
        gallery: [
            "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1560831340-b9679dc9e9f0?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1513738260158-30e559c10093?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1757085242669-076c35ff9397?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1757085242641-d829ddde7191?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1757085242675-1a047a53c04d?q=80&w=400&auto=format&fit=crop"

        ]
    },
    {
        id: 3,
        title: "Annual Cookery Competition",
        description: "Show off your culinary skills! Compete with the best home cooks and win exciting prizes. Categories for all ages. come with your friends and children.",
        date: "December 2025",
        location: "Galle Face Green",
        time: "10:00 AM onwards",
        image: cookingCompetitionImg,
        details: "The Annual Cookery Competition, held on June 2025, was a vibrant and exciting event that showcased culinary creativity and talent. Participants demonstrated their cooking skills by preparing a variety of delicious dishes, blending traditional flavors with innovative ideas. The competition encouraged teamwork, creativity, and a love for cooking, making it a memorable experience for both participants and visitors.",
        gallery: [
            "https://images.unsplash.com/photo-1578366941741-9e517759c620?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1632239008255-f3d12a19e13a?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1652260957608-927b3320c705?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1602534956586-2f4997a5a8ef?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1605433247501-698725862cea?w=400&auto=format&fit=crop&q=80",     
        ]
    }
];

const Events = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [modalType, setModalType] = useState(''); // 'signup' or 'details'

    const handleSignupClick = (event) => {
        setSelectedEvent(event);
        setModalType('signup');
        setModalOpen(true);
    };

    const handleDetailsClick = (event) => {
        setSelectedEvent(event);
        setModalType('details');
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedEvent(null);
        setModalType('');
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for signing up for ${selectedEvent.title}! We will contact you soon.`);
        closeModal();
    };

    return (
        <div className="events-page">
            <header className="careers-header">
                <h1>Exciting Events</h1>
                <p>Join us for workshops, competitions, and more. Community is at the heart of what we do.</p>
            </header>

            <div className="careers-grid">
                {eventsData.map(event => (
                    <div key={event.id} className="event-card">
                        <img src={event.image} alt={event.title} className="event-image" />
                        <div className="event-content">
                            <h2 className="event-title">{event.title}</h2>
                            <p>{event.description}</p>
                            <hr style={{ margin: '15px 0', border: '0', borderTop: '1px solid #eee' }} />
                            <p><strong>When:</strong> {event.date}</p>
                            <p><strong>Where:</strong> {event.location}</p>
                            <p><strong>Time:</strong> {event.time}</p>

                            {/* Buttons based on ID */}
                            <div style={{ marginTop: '20px' }}>
                                {event.id === 1 && (
                                    <button className="submit-btn" style={{ width: 'auto', padding: '10px 20px' }} onClick={() => handleSignupClick(event)}>
                                        Sign Up Now
                                    </button>
                                )}
                                {(event.id === 2 || event.id === 3) && (
                                    <button className="submit-btn" style={{ width: 'auto', padding: '10px 20px', backgroundColor: '#2c3e50' }} onClick={() => handleDetailsClick(event)}>
                                        View Details
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalOpen && selectedEvent && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>&times;</button>

                        {modalType === 'signup' && (
                            <div>
                                <h2>Sign Up: {selectedEvent.title}</h2>
                                <form className="apply-form" style={{ background: 'transparent', padding: '0' }} onSubmit={handleSignupSubmit}>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Age</label>
                                        <input type="number" placeholder="Your Age" required min="5" max="100" />
                                    </div>
                                    <div className="form-group">
                                        <label>Hometown</label>
                                        <input type="text" placeholder="Your Hometown" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="text" placeholder="Your Phone Number" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <input type="text" placeholder="Male/Female" required />
                                    </div>
                                    <button type="submit" className="submit-btn">Register</button>
                                </form>
                            </div>
                        )}

                        {modalType === 'details' && (
                            <div>
                                <h2>{selectedEvent.title}</h2>
                                <p style={{ lineHeight: '1.6', color: '#555' }}>{selectedEvent.details}</p>

                                <div className="gallery-grid">
                                    {selectedEvent.gallery && selectedEvent.gallery.map((img, index) => (
                                        <img key={index} src={img} alt={`Gallery ${index}`} className="gallery-img" />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;
