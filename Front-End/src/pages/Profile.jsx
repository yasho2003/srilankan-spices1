import React, { useState } from 'react';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';
import { FiEdit2, FiPlus } from 'react-icons/fi';

export default function Profile() {
    const { user, logout, updateUser } = useAuth();
    const navigate = useNavigate();

    // Local state for editing
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [address, setAddress] = useState(user?.address || '');

    if (!user) {
        navigate('/login');
        return null;
    }

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleSave = async () => {
        const result = await updateUser(name, email, address);
        if (result.success) {
            setIsEditing(false);
            alert("Profile updated!");
        } else {
            alert("Failed to update: " + result.message);
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Profile</h1>
                <button
                    onClick={handleLogout}
                    style={{ padding: '8px 16px', border: '2px solid #000000ff',color: '#000000ff', background: 'transparent', borderRadius: '4px', cursor: 'pointer' }}
                >   
                    Log out
                </button>
            </div>

            {/* Profile Card */}
            <div style={{ border: '1px solid #6d1fb1ff', borderRadius: '8px', padding: '30px', marginBottom: '30px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{ fontSize: '1.2rem', color: '#040404ff' }}>
                        Contact Information
                    </div>
                    {!isEditing && (
                        <FiEdit2 style={{ cursor: 'pointer' }} onClick={() => setIsEditing(true)} />
                    )}
                </div>

                {isEditing ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <label>
                            Name: <br />
                            <input value={name} onChange={e => setName(e.target.value)} style={{ padding: '10px',background: '#fbf9f9ff',color: '#040404ff', border: '1px solid #8b8989ec', borderRadius: '4px', width: '100%', marginTop: '5px' }} />
                        </label>
                        <label>
                            Email: <br />
                            <input value={email} onChange={e => setEmail(e.target.value)} style={{ padding: '10px',background: '#fbf9f9ff',color: '#040404ff', border: '1px solid #9e97a3b1', borderRadius: '4px', width: '100%', marginTop: '5px' }} />
                        </label>
                        <label>
                            Address: <br />
                            <input value={address} onChange={e => setAddress(e.target.value)} style={{ padding: '10px',background: '#fbf9f9ff',color: '#040404ff', border: '1px solid #9e97a3b1',width: '100%', marginTop: '5px' }} />
                        </label>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                            <button onClick={handleSave} style={{ padding: '10px 20px', background: '#6d1fb1ff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
                            <button onClick={() => setIsEditing(false)} style={{ padding: '10px 20px', background: '#eee', color: '#000', border: '1px solid #6d1fb1ff', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div style={{ fontSize: '1.1rem', marginBottom: '10px' }}>{user.name}</div>
                        <div style={{ color: '#555' }}>{user.email}</div>
                    </div>
                )}
            </div>

            {/* Address Section */}
            <div style={{ border: '1px solid #6d1fb1ff', borderRadius: '8px', padding: '30px', boxShadow: '0 2px 5px rgba(202, 95, 235, 0.42)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>Address</h3>
                    <button style={{ background: 'none',color: '#010101ff',border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '1rem', fontWeight: 'bold' }} onClick={() => setIsEditing(true)}>
                        <FiPlus /> Add
                    </button>
                </div>

                <div style={{ background: '#6d1fb11a', padding: '20px', borderRadius: '4px', color: '#666' }}>
                    {user.address ? (
                        <div>{user.address}</div>
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            No addresses added
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
