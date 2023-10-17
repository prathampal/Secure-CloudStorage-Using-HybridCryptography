const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Import required modules
const express = require('express');
const router = express.Router();

// In-memory user data store (replace this with a real database)
const users = [];

// Register a new user
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Add the new user to the data store
  users.push({ username, password });

  res.status(201).json({ message: 'User registered successfully' });
});

// User login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists and the password is correct (insecure for demonstration purposes)
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful' });
});

module.exports = router;
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes'); // Import your user routes

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Mount user routes
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
