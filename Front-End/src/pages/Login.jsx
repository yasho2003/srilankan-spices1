import React, { useState } from 'react';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const { login, register } = useAuth();
    const navigate = useNavigate();

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
            navigate('/products'); // Redirect to products or home after login
        } else {
            setError(result.message);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', fontFamily: 'sans-serif' }}>
            <div style={{ width: '100%', maxWidth: '400px', padding: '20px', textAlign: 'center' }}>

                <img src={logo} alt="Spice Harvest Co." style={{ width: '80px', marginBottom: '20px' }} />

                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{isLogin ? 'Sign in' : 'Create account'}</h2>
                <p style={{ color: '#666', marginBottom: '30px' }}>
                    {isLogin ? 'Sign in or create an account' : 'Please enter your details'}
                </p>

                {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem' }}
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem' }}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem' }}
                    />

                    <button
                        type="submit"
                        style={{
                            background: '#000',
                            color: '#fff',
                            border: 'none',
                            padding: '15px',
                            borderRadius: '5px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}
                    >
                        {isLogin ? 'Continue' : 'Create Account'}
                    </button>
                </form>

                <div style={{ marginTop: '20px' }}>
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        style={{ background: 'none', border: 'none', color: '#000', textDecoration: 'underline', cursor: 'pointer' }}
                    >
                        {isLogin ? "No account? Create one" : "Already have an account? Sign in"}
                    </button>
                </div>

            </div>
        </div>
    );
}
