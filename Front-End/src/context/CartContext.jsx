import React, { createContext, useContext, useState, useEffect } from 'react';
import * as cartService from '../services/cartService';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch cart items on mount
    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        setLoading(true);
        setError(null);
        try {
            const items = await cartService.getCartItems();
            setCartItems(items);
        } catch (err) {
            setError('Failed to load cart');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const addToCart = async (productId, quantity = 1) => {
        setLoading(true);
        setError(null);
        try {
            await cartService.addToCart(productId, quantity);
            await fetchCart(); // Refresh cart
            return true;
        } catch (err) {
            setError('Failed to add item to cart');
            console.error(err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const removeFromCart = async (cartItemId) => {
        setLoading(true);
        setError(null);
        try {
            await cartService.removeFromCart(cartItemId);
            await fetchCart(); // Refresh cart
            return true;
        } catch (err) {
            setError('Failed to remove item from cart');
            console.error(err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const clearCart = async () => {
        setLoading(true);
        setError(null);
        try {
            await cartService.clearCart();
            setCartItems([]);
            return true;
        } catch (err) {
            setError('Failed to clear cart');
            console.error(err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Calculate cart totals
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce(
        (total, item) => total + (item.product?.price || 0) * item.quantity,
        0
    );

    const value = {
        cartItems,
        cartCount,
        cartTotal,
        loading,
        error,
        addToCart,
        removeFromCart,
        clearCart,
        fetchCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
