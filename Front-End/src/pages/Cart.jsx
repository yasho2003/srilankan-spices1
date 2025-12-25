import React from 'react';
import './Cart.css';
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, loading } = useCart();

    // Note: Quantity update would require backend endpoint - for now just showing current quantity
    const updateQuantity = (id, delta) => {
        // TODO: Implement quantity update API call
        console.log('Update quantity not yet implemented');
    };

    const handleRemoveItem = async (id) => {
        await removeFromCart(id);
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.product?.price || 0) * item.quantity, 0);
    const shipping = 5.00;
    const total = subtotal + shipping;

    const handleCheckout = () => {
        navigate('/payment');
    };

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
                                            <img src={item.product?.imageUrl || 'https://via.placeholder.com/100'} alt={item.product?.name} />
                                        </div>
                                        <div className="item-details">
                                            <h3>{item.product?.name}</h3>
                                            <p className="item-price-each">${item.product?.price?.toFixed(2)} / unit</p>
                                        </div>
                                        <div className="item-quantity">
                                            <button onClick={() => updateQuantity(item.id, -1)}><FiMinus /></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}><FiPlus /></button>
                                        </div>
                                        <div className="item-total">
                                            ${((item.product?.price || 0) * item.quantity).toFixed(2)}
                                        </div>
                                        <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
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
                                <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
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
