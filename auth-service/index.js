const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Auth Service is running');
});

// Routes will be added here

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
