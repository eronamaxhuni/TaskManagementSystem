const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://mongo:27017/notifications', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.get('/', (req, res) => {
  res.send('Notification Service is running');
});

// Notification Model and Routes would go here

app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
