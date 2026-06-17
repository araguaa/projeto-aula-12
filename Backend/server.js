const express = require('express');
const cors = require('cors');

const app = express();

require('./db');

const userRoutes = require('./routes/users');

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});