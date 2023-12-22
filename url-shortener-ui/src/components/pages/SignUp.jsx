import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignUp = () => {
  const [newUser, setNewUser] = useState({ username: '', password: '' });

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/user/register', newUser);
      console.log('User registered successfully:', response.data);
      toast.success('User Created Successfully')
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <label htmlFor="newUsername">Username:</label>
        <input
          type="text"
          id="newUsername"
          name="username"
          value={newUser.username}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="newPassword">Password:</label>
        <input
          type="password"
          id="newPassword"
          name="password"
          value={newUser.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
