import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/useCart';
import { useCurrency } from '../context/CurrencyContext';
import './EssentialFavors.css';

import { products } from '../data/products';

const EssentialFavors = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { formatPrice } = useCurrency();

    const essentialOils = products.filter(p => p.category === 'oil');

    const handleAddToCart = async (item) => {
        const success = await addToCart(item);
        if (success) {
            alert(`${item.name} added to cart!`);
        }
    };

    const handleBuyNow = (item, quantity) => {
        navigate('/payment', { state: { item, quantity } });
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
                                    <span className="oil-price">{formatPrice(oil.price)}</span>
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
