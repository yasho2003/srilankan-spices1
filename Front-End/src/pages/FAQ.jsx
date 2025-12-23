import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    // State to track which question is active. 
    // Format: 'categoryIndex-questionIndex' (e.g., '0-1') or null
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const faqData = [
        {
            category: "Packaging & Freshness",
            questions: [
                {
                    q: "How are your spices packaged to ensure freshness?",
                    a: "We use premium, food-grade resealable pouches and glass jars with airtight seals. This barrier protection blocks light, moisture, and air, preserving the volatile oils and aroma of the spices for longer."
                },
                {
                    q: "Is your packaging eco-friendly?",
                    a: "Yes! We are committed to sustainability. Our glass jars are 100% recyclable, and our pouches are made from biodegradable materials where possible. We constantly strive to minimize our environmental footprint."
                }
            ]
        },
        {
            category: "Shipping & Delivery",
            questions: [
                {
                    q: "Do you ship internationally?",
                    a: "Absolutely. We ship our authentic Sri Lankan spices worldwide. International shipping rates and times vary depending on the destination, calculated at checkout."
                },
                {
                    q: "How long will it take to receive my order?",
                    a: "Orders are typically processed within 2-3 business days. Domestic deliveries take 3-5 days, while international shipments range from 10-15 business days depending on customs clearance."
                },
                {
                    q: "How are shipping costs calculated?",
                    a: "Shipping is calculated based on the weight of your package and your delivery address. We offer free shipping on bulk orders over a certain value."
                }
            ]
        },
        {
            category: "Quantity & Bulk Orders",
            questions: [
                {
                    q: "Do you offer bulk discounts?",
                    a: "Yes, we love partnering with chefs, restaurants, and avid home cooks! We offer tiered pricing for bulk quantities. Please visit our Wholesale page or contact us for a custom quote."
                },
                {
                    q: "What are your standard package sizes?",
                    a: "Our household spices typically come in 100g and 250g packs. Premium items like Saffron or Vanilla are available in smaller quantities (1g, 5g, 10g). Bulk sizes of 1kg and 5kg are also available."
                }
            ]
        },
        {
            category: "Other Questions",
            questions: [
                {
                    q: "Are your spices organic?",
                    a: "Many of our spices are sourced from certified organic farms in Sri Lanka. Look for the 'Organic' label on specific product pages. All our products are 100% natural with no artificial additives."
                },
                {
                    q: "What is the shelf life of your spices?",
                    a: "Whole spices stay fresh for 1-2 years when stored correctly (cool, dark place). Ground spices are best used within 6 months for maximum flavor potency."
                },
                {
                    q: "Can I cancel or modify my order?",
                    a: "You can modify your order within 24 hours of placement by contacting our support team. Once an order has been shipped, it cannot be changed."
                }
            ]
        }
    ];

    return (
        <div className="faq-page">
            <header className="faq-hero">
                <h1>Frequently Asked Questions</h1>
                <p>Everything you need to know about our spices, shipping, and service.</p>
            </header>

            <div className="faq-container">
                {faqData.map((section, catIndex) => (
                    <div key={catIndex} className="faq-category">
                        <h2 className="category-title">{section.category}</h2>
                        <div className="questions-list">
                            {section.questions.map((item, qIndex) => {
                                const uniqueId = `${catIndex}-${qIndex}`;
                                const isActive = activeQuestion === uniqueId;

                                return (
                                    <div
                                        key={qIndex}
                                        className={`faq-item ${isActive ? 'active' : ''}`}
                                        onClick={() => toggleQuestion(uniqueId)}
                                    >
                                        <div className="faq-question">
                                            <h3>{item.q}</h3>
                                            <span className="faq-icon">{isActive ? '−' : '+'}</span>
                                        </div>
                                        <div
                                            className="faq-answer"
                                            style={{ maxHeight: isActive ? '200px' : '0' }}
                                        >
                                            <p>{item.a}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                <div className="faq-footer-note">
                    <p>Still have questions? <a href="mailto:support@srilankanspices.com">Contact our support team</a> directly.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
