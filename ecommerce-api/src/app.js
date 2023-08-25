const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
