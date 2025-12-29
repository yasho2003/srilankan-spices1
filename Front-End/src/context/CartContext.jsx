import React, { useState, useEffect } from 'react';
import * as cartService from '../services/cartService';
import { CartContext } from './CartContextDef';


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


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

    const addToCart = async (item, quantity = 1) => {
        setLoading(true);
        setError(null);
        try {
            const itemWithQty = { ...item, quantity };
            await cartService.addToCart(itemWithQty);
            await fetchCart();
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
            await fetchCart();
            return true;
        } catch (err) {
            setError('Failed to remove item from cart');
            console.error(err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const updateQuantity = async (productId, quantity) => {
        if (quantity < 1) return; // Prevent quantity < 1
        setLoading(true);
        setError(null);
        try {
            await cartService.updateCartQuantity(productId, quantity);
            await fetchCart();
            return true;
        } catch (err) {
            setError('Failed to update quantity');
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
        (total, item) => total + (item.price || 0) * item.quantity,
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
        updateQuantity,
        clearCart,
        fetchCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
