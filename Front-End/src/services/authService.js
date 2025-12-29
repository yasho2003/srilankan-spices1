const API_BASE_URL = 'http://localhost:5001/api/auth';
const API_USER_URL = 'http://localhost:5001/api/users';

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

export const register = async (name, email, password) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
    });
    return handleResponse(response, 'Registration failed');
};

export const login = async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    return handleResponse(response, 'Login failed');
};

export const updateUser = async (id, name, email, address) => {
    const response = await fetch(`${API_USER_URL}/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, name, email, address }),
    });
    return handleResponse(response, 'Update failed');
};
