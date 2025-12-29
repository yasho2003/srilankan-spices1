const API_BASE_URL = 'http://localhost:5001/api';

const handleResponse = async (response, defaultMessage) => {
    let data;
    try {
        const text = await response.text();
        try {
            data = JSON.parse(text);
        } catch {
            throw new Error(`Server returned non-JSON response (likely HTML): ${text.substring(0, 50)}...`);
        }
    } catch (e) {
        throw new Error(e.message || defaultMessage);
    }

    if (!response.ok) {
        const errorMsg = data.message || data.sqlMessage || (data.code ? `DB Error: ${data.code}` : undefined) || defaultMessage;
        throw new Error(errorMsg);
    }
    return data;
};

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
    try {
        const response = await fetch(`${API_BASE_URL}/cart`);
        return handleResponse(response, 'Failed to fetch cart items');
    } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }
};

// Add item to cart
export const addToCart = async (item) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cart/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity || 1
            }),
        });
        return handleResponse(response, 'Failed to add item to cart');
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
