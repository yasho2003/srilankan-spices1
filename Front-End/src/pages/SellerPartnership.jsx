import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Careers.css';

const SellerPartnership = () => {
    return (
        <div className="partner-page">
            <header className="careers-header">
                <h1>Sell With Us</h1>
                <p>Are you a spice grower or a small producer? Let's take your products to a wider audience.</p>
            </header>

            <div className="partner-content">
                <h2>Partner Program Requirements</h2>
                <div style={{ textAlign: 'left', margin: '30px auto', maxWidth: '600px' }}>
                    <p>We are looking for partners who share our commitment to quality and sustainability. If you have premium spices, we want to hear from you.</p>
                    <ul style={{ marginTop: '20px', lineHeight: '1.8' }}>
                        <li><strong>Quality:</strong> Products must be organic or sustainably grown.</li>
                        <li><strong>Origin:</strong> Must be authentically Sri Lankan.</li>
                        <li><strong>Capacity:</strong> Ability to supply consistently (small batch is okay!).</li>
                        <li><strong>Transparency:</strong> Willingness to share your sourcing story.</li>
                    </ul>
                    <p style={{ marginTop: '20px' }}>
                        We provide marketing support, packaging solutions, and a platform to reach international customers.
                    </p>
                </div>

                <div className="partner-cta">
                    <h3>Interested? Get in touch!</h3>
                    <p style={{ marginBottom: '20px' }}>Send us an email with your product details and contact information.</p>
                    <a href="mailto:partnerships@srilankanspices.com?subject=Seller%20Partnership%20Inquiry" className="email-btn">
                        <FaPaperPlane style={{ marginRight: '10px' }} />
                        Email Us Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SellerPartnership;
