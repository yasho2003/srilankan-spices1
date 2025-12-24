import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BusinessGifting.css';
import goldenTea from '../assets/golden-turmeric-tea.jpg';

const BusinessGifting = () => {
    const navigate = useNavigate();
    const [selectedGift, setSelectedGift] = useState(null);

    // Dummy Data for Gift Packs
    const giftPacks = [
        {
            id: 1,
            name: "Ceylon Herbal Tea Collection",
            image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1000&auto=format&fit=crop",
            description: "A soothing selection of premium Ceylon herbal teas. Perfect for wellness and relaxation.",
            price: "$45.00",
            items: [
                "Organic Cinnamon Tea (50g)",
                "Lemongrass & Ginger Blend (50g)",
                "Moringa Wellness Tea (50g)",
                "Handcrafted Wooden Spoon",
                "Eco-friendly Gift Box"
            ]
        },
        {
            id: 2,
            name: "Ultimate Spice Master Pack",
            image: "https://images.unsplash.com/photo-1585597621521-92eff3674298?q=80&w=1170&auto=format&fit=crop",
            description: "The essential collection for any culinary enthusiast. Authentic Sri Lankan spices to elevate every dish.",
            price: "$60.00",
            items: [
                "Ceylon Cinnamon Sticks (100g)",
                "Black Pepper Corns (100g)",
                "Roasted Curry Powder (100g)",
                "Cardamom Pods (50g)",
                "Cloves (50g)",
                "Recipe Booklet"
            ]
        },
        {
            id: 3,
            name: "Artisan Handmade Card & Spice",
            image: "https://images.unsplash.com/photo-1580437066029-e948d775426c?w=600&auto=format&fit=crop&q=60",
            description: "A thoughtful gesture combining traditional spices with a beautifully handcrafted greeting card.",
            price: "$25.00",
            items: [
                "Choice of 2 Spice Jars (50g each)",
                "Handmade Paper Greeting Card",
                "Decorated Jute Bag",
                "Gift Tag"
            ]
        },
        {
            id: 4,
            name: "Golden Turmeric Wellness Kit",
            image: goldenTea,
            description: "Harness the power of golden turmeric with this health-focused gift set.",
            price: "$35.00",
            items: [
                "Organic Turmeric Powder (100g)",
                "Turmeric & Black Pepper Tea (20 bags)",
                "Honey Jar (200ml)",
                "Golden Milk Recipe Card"
            ]
        }
    ];

    const openModal = (gift) => {
        setSelectedGift(gift);
    };

    const closeModal = () => {
        setSelectedGift(null);
    };

    const handleAddToCart = () => {
        navigate("/cart");
        closeModal();
    };

    const handleBuyNow = () => {
        alert(`Proceeding to buy ${selectedGift.name}!`);
        closeModal();
    };

    return (
        <div className="business-gifting-page">
            {/* Hero Section */}
            <header className="hero-gifting">
                <h1>Business & Corporate Gifting</h1>
                <p>
                    Leave a lasting impression with the exotic flavors of Sri Lanka.
                    Curated gift packs for clients, partners, and employees that celebrate heritage and quality.
                </p>
            </header>

            <div className="gifting-container">
                {/* Gift Packs Grid */}
                <div className="gift-grid">
                    {giftPacks.map(gift => (
                        <div key={gift.id} className="gift-card">
                            <img src={gift.image} alt={gift.name} />
                            <div className="gift-card-content">
                                <h3>{gift.name}</h3>
                                <p>{gift.description}</p>
                                <button className="btn-order-now" onClick={() => openModal(gift)}>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pricing Table */}
                <div className="pricing-section">
                    <h2>Shipping & Handling Rates</h2>
                    <div className="pricing-table-container">
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>Package Weight</th>
                                    <th>Shipping Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Less than 250g</td>
                                    <td>$4.00</td>
                                </tr>
                                <tr>
                                    <td>250g - 500g</td>
                                    <td>$5.00</td>
                                </tr>
                                <tr>
                                    <td>500g - 1000g</td>
                                    <td>$6.00</td>
                                </tr>
                                <tr>
                                    <td>More than 1000g</td>
                                    <td>$8.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedGift && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <img className="modal-image" src={selectedGift.image} alt={selectedGift.name} />
                        <div className="modal-details">
                            <h2>{selectedGift.name}</h2>
                            <p className="modal-price">{selectedGift.price}</p>
                            <p className="modal-description">{selectedGift.description}</p>

                            <div className="modal-items-list">
                                <h4>What's Inside:</h4>
                                <ul>
                                    {selectedGift.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="modal-actions">
                                <button className="btn-add-cart" onClick={handleAddToCart}>Add to Cart</button>
                                <button className="btn-buy-now" onClick={handleBuyNow}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BusinessGifting;
