import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EssentialFavors.css';

import oilRose from '../assets/oil_rose.png';
import oilLavender from '../assets/oil_lavender.jpg';
import oilLily from '../assets/oil_lily.png';
import oilJasmine from '../assets/oil_jasmine.png';
import oilLemon from '../assets/oil_lemon.jpg';
import oilPeppermint from '../assets/oil_peppermint.jpg';
import oilEucalyptus from '../assets/oil_eucalyptus.jpg';
import oilChamomile from '../assets/oil_chamomile.jpg';
import oilCinnamon from '../assets/oil_cinnamon.jpg';
import oilVanilla from '../assets/oil_vanilla.jpg';
import oilSandalwood from '../assets/oil_sandalwood.jpg';
import oilClove from '../assets/oil_clove.jpg';

const EssentialFavors = () => {
    const navigate = useNavigate();

    const essentialOils = [
        {
            id: 1,
            name: "Pure Rose Essential Oil",
            image: oilRose,
            description: "A timeless floral scent known for its calming properties. Perfect for aromatherapy and self-care.",
            price: "$18.00",
            size: "15ml"
        },
        {
            id: 2,
            name: "Lavender Serenity",
            image: oilLavender,
            description: "Relax and unwind with the soothing aroma of fresh lavender fields.",
            price: "$15.00",
            size: "15ml"
        },
        {
            id: 3,
            name: "Lily Essence",
            image: oilLily,
            description: "A delicate and sweet fragrance that captures the essence of spring bloooms.",
            price: "$20.00",
            size: "10ml"
        },
        {
            id: 4,
            name: "Jasmine Absolute",
            image: oilJasmine,
            description: "Exotic and rich, Jasmine oil is perfect for uplifting your mood and spirit.",
            price: "$22.00",
            size: "10ml"
        },
        {
            id: 5,
            name: "Zesty Lemon",
            image: oilLemon,
            description: "Bright, refreshing, and energetic. A burst of citrus to revitalize your space.",
            price: "$12.00",
            size: "15ml"
        },
        {
            id: 6,
            name: "Fresh Peppermint",
            image: oilPeppermint,
            description: "Cool and invigorating. Excellent for focus and clearing the mind.",
            price: "$14.00",
            size: "15ml"
        },
        {
            id: 7,
            name: "Eucalyptus Clarity",
            image: oilEucalyptus,
            description: "A crisp, purifying scent that promotes deep breathing and wellness.",
            price: "$14.00",
            size: "15ml"
        },
        {
            id: 8,
            name: "Chamomile Calm",
            image: oilChamomile,
            description: "Gentle and soothing. Ideal for establishing a peaceful bedtime routine.",
            price: "$19.00",
            size: "10ml"
        },
        {
            id: 9,
            name: "Ceylon Cinnamon",
            image: oilCinnamon,
            description: "Warm, spicy, and inviting. The true scent of Sri Lankan heritage.",
            price: "$16.00",
            size: "15ml"
        },
        {
            id: 10,
            name: "Pure Vanilla",
            image: oilVanilla,
            description: "Sweet, comforting, and classic. A familiar aroma that feels like home.",
            price: "$25.00",
            size: "10ml"
        },
        {
            id: 11,
            name: "Sacred Sandalwood",
            image: oilSandalwood,
            description: "Woody, earthy, and grounding. A luxurious oil for meditation and peace.",
            price: "$28.00",
            size: "5ml"
        },
        {
            id: 12,
            name: "Spicy Clove",
            image: oilClove,
            description: "Strong and stimulating. A powerful spice oil with a rich, historical aroma.",
            price: "$15.00",
            size: "15ml"
        }
    ];

    const handleAddToCart = (item) => {
        navigate("/cart");
    };

    const handleBuyNow = (item) => {
        alert(`Proceeding to checkout for ${item.name}!`);
    };

    return (
        <div className="essential-favors-page">
            {/* Hero Section */}
            <header className="hero-favors">
                <h1>Essential Favors</h1>
                <p>
                    Discover nature's purest essences. Our curated collection of essential oils is distilled from
                    finest botanicals to bring balance, harmony, and wellness to your life.
                </p>
            </header>

            <div className="favors-container">
                {/* Product Grid */}
                <div className="oils-grid">
                    {essentialOils.map(oil => (
                        <div key={oil.id} className="oil-card">
                            <div className="oil-image-container">
                                <img src={oil.image} alt={oil.name} />
                            </div>
                            <div className="oil-details">
                                <h3>{oil.name}</h3>
                                <p>{oil.description}</p>
                                <div className="oil-price-row">
                                    <span className="oil-price">{oil.price}</span>
                                    <span className="oil-size">{oil.size}</span>
                                </div>
                                <div className="oil-actions">
                                    <button className="btn-oil-cart" onClick={() => handleAddToCart(oil)}>Add to Cart</button>
                                    <button className="btn-oil-buy" onClick={() => handleBuyNow(oil)}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Customer Reviews */}
                <section className="favors-reviews">
                    <h2>What Our Customers Say</h2>
                    <div className="reviews-grid">
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p className="review-text">"The Rose oil is absolute perfection. It smells exactly like fresh petals. I use it in my diffuser every evening."</p>
                            <span className="review-author">- Sarath Perera</span>
                        </div>
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p className="review-text">"I've tried many Cinnamon oils, but this one from Sri Lanka has a depth of warmth I haven't found elsewhere."</p>
                            <span className="review-author">- Anura Jayamaha</span>
                        </div>
                        <div className="review-card">
                            <div className="stars">★★★★★</div>
                            <p className="review-text">"The Lavender and Peppermint bundle is my go-to gift for friends. Everyone loves the packaging and quality!"</p>
                            <span className="review-author">- Greenlanka CO</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EssentialFavors;
