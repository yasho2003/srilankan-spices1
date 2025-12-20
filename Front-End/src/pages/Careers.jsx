import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaBriefcase, FaHandshake } from 'react-icons/fa';
import './Careers.css';

const Careers = () => {
    return (
        <div className="careers-page">
            <header className="careers-header">
                <h1>Join Our Team</h1>
                <p>Be a part of our spicy journey. Whether you're a creator, a professional, or a partner, there's a place for you here.</p>
            </header>

            <div className="careers-grid">

                <Link to="/events" className="career-card" target="_blank">
                    <FaCalendarAlt className="card-icon" />
                    <h2>Events & Workshops</h2>
                    <p>Join our cookery classes, hand-craft workshops, and culinary competitions.</p>
                </Link>

                <Link to="/careers/sales-promoter" className="career-card">
                    <FaBriefcase className="card-icon" />
                    <h2>Job Vacancies</h2>
                    <p>We are looking for talented individuals. Apply for our Sales Promoter position.</p>
                </Link>

                <Link to="/careers/partner" className="career-card">
                    <FaHandshake className="card-icon" />
                    <h2>Sell With Us</h2>
                    <p>Partner with us to sell your high-quality spices. Let's grow together.</p>
                </Link>

            </div>
        </div>
    );
};

export default Careers;
