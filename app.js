const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;
const app = express();
const router = require('./routes/index');

app.listen(PORT, () => console.log(`Подключение к MongoDB: ${PORT}`));

mongoose
  .connect('mongodb://127.0.0.1:27017/mestodb')
  .then(() => console.log('Подключено к MongoDB'))
  .catch((err) => {
    console.error('Ошибка подключения к MongoDB:', err);
  });

app.use((req, res, next) => {
  req.user = { _id: '649ea24e5aae2626b3fa0903' };

  next();
});

app.use(express.json());
app.use('/', router);
app.use('/', (req, res) => {
  res.status(404).send({ message: 'Страница не найдена' });
});
