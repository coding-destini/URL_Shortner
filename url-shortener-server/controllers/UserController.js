const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User')







//Sign Up User
module.exports.SignUp =  async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = await User.create({ username, password: hashedPassword });
  
      res.json({ message: 'User registered successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  //Sign In User
  module.exports.SignIn =  async (req, res) => {
      const { username, password } = req.body;
    
      try {
        // Find the user by username
        const user = await User.findOne({ username });
    
        // Check if the user exists and the password is correct
        if (user && await bcrypt.compare(password, user.password)) {
          // Generate a JWT token
          const token = jwt.sign({ userId: user._id, username: user.username }, 'your-secret-key', { expiresIn: '1h' });
    
          res.json({ message: 'Login successful', token });
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  };
  