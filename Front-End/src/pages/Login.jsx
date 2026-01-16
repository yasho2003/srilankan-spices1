import React, { useState } from 'react';
import { useAuth } from '../context/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Login.css';

export default function Login() {
    const location = useLocation();
    const navigate = useNavigate();
    const { login, register } = useAuth();

    const [isLogin, setIsLogin] = useState(location.state?.mode !== 'signup');
    const [email, setEmail] = useState(location.state?.email || '');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        let result;
        if (isLogin) {
            result = await login(email, password);
        } else {
            result = await register(name, email, password);
        }

        if (result.success) {
            navigate('/products');
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <img src={logo} alt="Spice Harvest Co." className="login-logo" />

                <h2>{isLogin ? 'Sign in' : 'Create account'}</h2>
                <p>
                    {isLogin ? 'Sign in or create an account' : 'Please enter your details to join us'}
                </p>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit} className="login-form">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="login-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="login-submit-btn">
                        {isLogin ? 'Continue' : 'Create Account'}
                    </button>
                </form>

                <button
                    className="login-toggle-btn"
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? (
                        <>No account? <span>Create one</span></>
                    ) : (
                        <>Already have an account? <span>Sign in</span></>
                    )}
                </button>
            </div>
        </div>
    );
}
