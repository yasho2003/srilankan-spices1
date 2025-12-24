import React, { useState } from 'react';
import './Cart.css';
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();

    // Minimalistic placeholder cart data since backend isn't ready
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Ceylon Cinnamon Sticks",
            price: 15.00,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1599940824399-b87987cb5733?q=80&w=1000&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Black Pepper Corns",
            price: 12.00,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1596450514735-310344b4cdea?q=80&w=1000&auto=format&fit=crop"
        }
    ]);

    const updateQuantity = (id, delta) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 5.00;
    const total = subtotal + shipping;

    return (
        <div className="cart-page">
            <div className="cart-container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <FiArrowLeft /> Continue Shopping
                </button>

                <h1>Your Cart</h1>

                <div className="cart-content">
                    {cartItems.length > 0 ? (
                        <>
                            <div className="cart-items">
                                {cartItems.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <div className="item-image">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="item-details">
                                            <h3>{item.name}</h3>
                                            <p className="item-price-each">${item.price.toFixed(2)} / unit</p>
                                        </div>
                                        <div className="item-quantity">
                                            <button onClick={() => updateQuantity(item.id, -1)}><FiMinus /></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}><FiPlus /></button>
                                        </div>
                                        <div className="item-total">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </div>
                                        <button className="remove-btn" onClick={() => removeItem(item.id)}>
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="cart-summary">
                                <h2>Order Summary</h2>
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Shipping</span>
                                    <span>${shipping.toFixed(2)}</span>
                                </div>
                                <div className="summary-row total">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <button className="checkout-btn">Proceed to Checkout</button>
                                <p className="secure-text">🛡️ Secure Payment & Shipping</p>
                            </div>
                        </>
                    ) : (
                        <div className="empty-cart">
                            <p>Your cart is empty.</p>
                            <button className="checkout-btn" onClick={() => navigate('/products')}>Browse Products</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
