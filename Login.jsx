import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/auth/login', { email, password });
            const { user, token } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/admin');
            window.location.reload();
        } catch (error) {
            setError(error.response.data.error);
        }
    };

    return (
        <div className="login_page">
            <div className="card_page">
                <div className="left">
                    <h1>Hello Readers.</h1>
                    <p>"Welcome! Delighted to have you join us. Let's dive in and make great things happen!"</p>
                    <span>Don't you have an account?</span>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <form onSubmit={handleLogin}>
                        <div>
                            <label>Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <label>Mot de passe:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit">Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
