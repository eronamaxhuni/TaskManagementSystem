const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://mongo:27017/tasks', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.get('/', (req, res) => {
  res.send('Tasks Service is running');
});

// Task Model and Routes would go here

app.listen(PORT, () => {
  console.log(`Tasks Service running on port ${PORT}`);
});
