const API_BASE_URL = 'http://localhost:5000/api';

// Get or create session ID
export const getSessionId = () => {
    let sessionId = localStorage.getItem('cart_session_id');
    if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('cart_session_id', sessionId);
    }
    return sessionId;
};

// Get all cart items for current session
export const getCartItems = async () => {
    // const sessionId = getSessionId(); // Backend currently fetches all carts, maybe session ID will be needed later, but for now matching backend
    try {
        const response = await fetch(`${API_BASE_URL}/cart`);
        if (!response.ok) throw new Error('Failed to fetch cart items');
        return await response.json();
    } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }
};

// Add item to cart
export const addToCart = async (item) => {
    // const sessionId = getSessionId();
    try {
        const response = await fetch(`${API_BASE_URL}/cart/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: item.id,
                name: item.name,
                price: item.price
            }),
        });
        if (!response.ok) throw new Error('Failed to add item to cart');
        return await response.json();
    } catch (error) {
        console.error('Error adding to cart:', error);
        throw error;
    }
};

// Remove item from cart
export const removeFromCart = async (cartItemId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cart/${cartItemId}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to remove item from cart');
        return true;
    } catch (error) {
        console.error('Error removing from cart:', error);
        throw error;
    }
};

// Update cart item quantity
export const updateCartQuantity = async (productId, quantity) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cart/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: productId,
                quantity: quantity
            }),
        });
        if (!response.ok) throw new Error('Failed to update cart item quantity');
        return await response.json();
    } catch (error) {
        console.error('Error updating cart quantity:', error);
        throw error;
    }
};

// Clear entire cart
export const clearCart = async () => {
    const sessionId = getSessionId();
    try {
        const response = await fetch(`${API_BASE_URL}/cart/clear?sessionId=${sessionId}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to clear cart');
        return true;
    } catch (error) {
        console.error('Error clearing cart:', error);
        throw error;
    }
};
