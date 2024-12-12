const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Function to read and write to a file (for storage)
const readDataFile = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const writeDataFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// Endpoint to get users
app.get('/api/users', (req, res) => {
  const users = readDataFile('./data/users.json');
  res.json(users);
});

// Endpoint to create a new user
app.post('/api/users', (req, res) => {
  const users = readDataFile('./data/users.json');
  const newUser = req.body;
  users.push(newUser);
  writeDataFile('./data/users.json', users);
  res.status(201).json(newUser);
});

// Endpoint to get reviews
app.get('/api/reviews', (req, res) => {
  const reviews = readDataFile('./data/reviews.json');
  res.json(reviews);
});

// Endpoint to post a new review
app.post('/api/reviews', (req, res) => {
  const reviews = readDataFile('./data/reviews.json');
  const newReview = req.body;
  reviews.push(newReview);
  writeDataFile('./data/reviews.json', reviews);
  res.status(201).json(newReview);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
