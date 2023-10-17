const jwt = require('jsonwebtoken');

// route for user login
router.post('/login', (req, res) => {
  // ... Your login code ...

  // Generate a JWT token on successful login
  const accessToken = jwt.sign({ username: username }, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
});
