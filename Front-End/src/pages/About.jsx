import React from 'react';
import './About.css';
import aboutTeamImage from '../assets/about_team_bw.png';

const About = () => {
    return (
        <div className="about-page">
            <div
                className="about-hero-section"
                style={{ backgroundImage: `url(${aboutTeamImage})` }}
            >
                <div className="mission-card">
                    <h2>Our Mission</h2>
                    <div className="mission-values">
                        <p>
                            Our mission is to share the true taste of Sri Lanka with the world by providing pure, natural, and high-quality Sri Lankan spices. We are committed to sourcing spices responsibly from local farmers, preserving traditional methods, and ensuring freshness in every product.

                            <br /> <br /> Through honesty, quality, and sustainability, we aim to support local communities while bringing authentic flavor, aroma, and health benefits to every kitchen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
