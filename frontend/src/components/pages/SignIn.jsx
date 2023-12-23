import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const SignIn = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSignIn = async () => {
    try {
      const response = await axios.post('https://urlshortner-hr2j.onrender.com/user/login', {
        username: credentials.email,
      password: credentials.password,
      });
      const { token } = response.data;

      // Store the token in localStorage
      localStorage.setItem('token', token);
      
      toast.success('User login Successfully')

      // Navigate to the dashboard
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="container">
      <form className="form">
        <h2>Sign In</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
