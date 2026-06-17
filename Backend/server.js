const express = require('express');
const cors = require('cors');

const app = express();

require('./db');

const userRoutes = require('./routes/users');

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});