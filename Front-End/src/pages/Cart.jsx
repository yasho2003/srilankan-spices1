import React from 'react';
import './Cart.css';
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/useCart';
import { products } from '../data/products';
import { useCurrency } from '../context/useCurrency';

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, updateQuantity, loading } = useCart();
    const { formatPrice } = useCurrency();

    if (loading) {
        return (
            <div className="cart-page">
                <div className="cart-container">
                    <h1>Loading your cart...</h1>
                </div>
            </div>
        );
    }

    const enhancedCartItems = cartItems.map(item => {
        const product = products.find(p => p.id === item.product_id);
        return {
            ...item,
            image: product ? product.image : 'https://via.placeholder.com/100'
        };
    });

    const handleUpdateQuantity = async (productId, currentQuantity, delta) => {
        const newQuantity = currentQuantity + delta;
        if (newQuantity < 1) return;
        await updateQuantity(productId, newQuantity);
    };

    const handleRemoveItem = async (product_id) => {
        await removeFromCart(product_id);
    };

    const subtotal = enhancedCartItems.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0);
    const shipping = 500; // Base shipping in LKR
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
                    {enhancedCartItems.length > 0 ? (
                        <>
                            <div className="cart-items">
                                {enhancedCartItems.map(item => (
                                    <div key={item.id || item.product_id} className="cart-item">
                                        <div className="item-image">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="item-details">
                                            <h3>{item.name}</h3>
                                            <p className="item-price-each">{formatPrice(item.price || 0)} / unit</p>
                                        </div>
                                        <div className="item-quantity">
                                            <button onClick={() => handleUpdateQuantity(item.product_id, item.quantity, -1)}><FiMinus /></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleUpdateQuantity(item.product_id, item.quantity, 1)}><FiPlus /></button>
                                        </div>
                                        <div className="item-total">
                                            {formatPrice((item.price || 0) * item.quantity)}
                                        </div>
                                        <button className="remove-btn" onClick={() => handleRemoveItem(item.product_id)}>
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="cart-summary">
                                <h2>Order Summary</h2>
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(subtotal)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Shipping</span>
                                    <span>{formatPrice(shipping)}</span>
                                </div>
                                <div className="summary-row total">
                                    <span>Total</span>
                                    <span>{formatPrice(total)}</span>
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
