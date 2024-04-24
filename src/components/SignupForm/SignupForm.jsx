import React, { useState } from 'react';
import './SignupForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '', 
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [validationMessages, setValidationMessages] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Perform validation
    let message = '';
    switch (name) {
      case 'username':
        message = value.trim() === '' ? 'Username is required' : '';
        break;
      case 'email':
        message = !/^\S+@\S+\.\S+$/.test(value) ? 'Invalid email format' : '';
        break;
      case 'password':
        message = value.length < 6 ? 'Password must be at least 6 characters long' : '';
        break;
      case 'confirmPassword':
        message = value !== formData.password ? 'Passwords do not match' : '';
        break;
      default:
        break;
    }
    setValidationMessages(prevState => ({
      ...prevState,
      [name]: message
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        // Send user data to the server for signup
        const response = await axios.post('http://localhost:3000/api/signup',formData
        );

        // Handle successful signup
        console.log('User signed up successfully:', response.data);
        // Optionally, you can redirect the user to another page after signup
        // history.push('/dashboard'); // Assuming you're using useHistory hook
    } catch (error) {
        // Handle signup error
        console.error('Error signing up:', error);
        // Optionally, you can display an error message to the user
        // setError('An error occurred during signup');
    }
};
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-form-group">
            <label className="signup-label" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="signup-input"
              required
            />
            {validationMessages.username && <span className="validation-message">{validationMessages.username}</span>}
          </div>
          <div className="signup-form-group">
            <label className="signup-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="signup-input"
              required
            />
            {validationMessages.email && <span className="validation-message">{validationMessages.email}</span>}
          </div>
          <div className="signup-form-group">
            <label className="signup-label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="signup-input"
              required
            />
            {validationMessages.password && <span className="validation-message">{validationMessages.password}</span>}
          </div>
          <div className="signup-form-group">
            <label className="signup-label" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="signup-input"
              required
            />
            {validationMessages.confirmPassword && <span className="validation-message">{validationMessages.confirmPassword}</span>}
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
