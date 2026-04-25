const express = require('express');
const cors = require('cors');
const scanRoute = require('./routes/scanRoute');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/scan', scanRoute);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});