
import React from 'react';
import './WholesaleBulk.css';
import invoice from '../assets/invoice_new.jpg';
import partnerLogo from '../assets/partner_logo.jpg';

import partnerWok from '../assets/partner_wok.jpg';
import partnerMwambao from '../assets/partner_mwambao.jpg';
import partnerLandSpice from '../assets/partner_land_spice.jpg';
import partnerGarlicChili from '../assets/partner_garlic_chili.jpg';
import partnerChiliSauce from '../assets/partner_chili_sauce.jpg';

const WholesaleBulk = () => {
    // Array of partner logos
    const partners = [
        { img: partnerWok, name: 'Wok' },
        { img: partnerMwambao, name: 'Mwambao Spices' },
        { img: partnerLandSpice, name: 'Land & Spice' },
        { img: partnerGarlicChili, name: 'Garlic & Chili' },
        { img: partnerChiliSauce, name: 'Chili Pepper' },
    ];

    return (
        <div className="wholesale-page">
            {/* ... (Previous sections remain unchanged) ... */}

            {/* Hero Section (Optional but good for context) */}
            <header className="wholesale-header">
                <h1>Wholesale & Bulk</h1>
                <p>Premium spices for your business, direct from our farms.</p>
            </header>

            {/* 1. Farm Description & Photo */}
            <section className="section-container farm-section">
                {/* Card 1: Content */}
                <div className="content-side farm-content-card">
                    <div className="farm-card-top">
                        <h1>Our Spice Sanctuary</h1>
                        <p>
                            <br />
                            Nestled in the lush hills of Sri Lanka, our spice farms are a testament to nature's bounty.
                            We practice sustainable farming, using traditional greenhouse methods to ensure every peppercorn,
                            cinnamon stick, and cardamom pod is grown to perfection.
                        </p>
                        <p>
                            Experience the journey from our soil to your business. We believe in transparency and quality,
                            cultivating spices that tell a story of heritage and care.
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="farm-card-bottom">
                        <span className="contact-text">CONTACT US</span>
                    </div>
                </div>


                <div className="image-side">
                    <img
                        src="https://images.unsplash.com/photo-1761839257946-4616bcfafec7?q=80&w=1169&auto=format&fit=crop"
                        alt="Spice Greenhouse Farm"
                    />
                </div>
            </section>


            <section className="section-container wholesale-details-section">
                <div className="image-side">
                    <img
                        src="https://images.unsplash.com/photo-1566824099147-bef027d3a333?q=80&w=1170&auto=format&fit=crop"
                        alt="Bulk Spices"
                    />
                </div>
                <div className="content-side wholesale-content-card">
                    <div className="wholesale-card-top">
                        <h1>Wholesale & Bulk Supply</h1>
                        <p>
                            <br />
                            We offer flexible wholesale solutions tailored to restaurants, retailers, and food manufacturers.
                            Whether you need bulk sacks of raw spices or custom-blended powders, we have the capacity to deliver.
                        </p>
                        <p>
                            Our partners benefit from competitive pricing, consistent quality, and reliable shipping.
                            Elevate your product line with the authentic taste of Sri Lankan spices.
                            <br />
                            <br />
                        </p>
                    </div>
                    <div className="wholesale-card-bottom">
                        <a href="mailto:wholesale@srilankanspices.com" className="btn-pricing-link">GET PRICING</a>
                    </div>
                </div>
            </section>

            {/* 3. Invoice Image Section */}
            <section className="section-container invoice-section">
                <h2>Our Billing Invoices</h2>
                <p>We believe every interaction should be delightful, including our paperwork.Here's the invoice we use for our wholesale customers.
                </p>
                <div className="invoice-container">
                    <img src={invoice} alt="Colorful Creative Invoice" className="invoice-img" />
                </div>
            </section>

            {/* 4. Customer Reviews */}
            <section className="section-container reviews-section">
                <h2>What Our Partners Say</h2>
                <div className="reviews-grid">
                    <div className="review-card">
                        <div className="stars">★★★★★</div>
                        <p>"The quality of cinnamon is unmatched. Our customers love the new blend we created with their bulk supply."</p>
                        <h4>- Artisan Bakery Co.</h4>
                    </div>
                    <div className="review-card">
                        <div className="stars">★★★★★</div>
                        <p>"Reliable shipping and the freshest cardamom we've ever sourced. Highly recommended for any serious chef."</p>
                        <h4>- Chef Marco, La Dolce</h4>
                    </div>
                    <div className="review-card">
                        <div className="stars">★★★★★</div>
                        <p>"Beautiful packaging and efficient service. The wholesale process was smooth from start to finish."</p>
                        <h4>- Green Earth Organics</h4>
                    </div>
                </div>
            </section>

            {/* 5. Partnership Logos */}
            <section className="section-container partners-section">
                <h2 className="partners-title">WHO WE'RE WORKING WITH</h2>
                <div className="logos-grid">
                    {partners.map((partner, i) => (
                        <div key={i} className="partner-logo">
                            <img src={partner.img} alt={partner.name} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WholesaleBulk;
