const jwt = require('jsonwebtoken');

// Authentication Function
const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');
  
    console.log("MY TOKEN : ", token);
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized - Missing token' });
    }
  
    try {
      const decoded = jwt.verify(token, 'your-secret-key');
      req.user = decoded;
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
  };
  
module.exports = authenticateUser;
  