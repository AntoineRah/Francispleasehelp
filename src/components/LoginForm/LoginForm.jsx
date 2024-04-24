import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LoginForm.css'; // Import the CSS file for styling

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here, such as sending a request to a server
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <label className="login-label" htmlFor="username">Username</label>
                        <input
                            className="login-input"
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div className="login-form-group">
                        <label className="login-label" htmlFor="password">Password</label>
                        <input
                            className="login-input"
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <button className="login-button" type="submit">Login</button>
                </form>
                <div className="signup-link">
                    <p>Don't have an account?</p>
                    <Link to="/signup" className="signup-button">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
