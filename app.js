const express = require("express");
const mongoose = require("mongoose"); //* * подлкючение модуля БД */

const { PORT = 3000 } = process.env;
const app = express();
const router = require("./routes/index");

//* * запуск сервера express.js и прослушивание запросов в порту*/
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));

//* * подключение к БД */
mongoose
  .connect("mongodb://localhost:27017/mestodb")
  .then(() => console.log("Подключено к MongoDB"))
  .catch((err) => {
    console.error("Ошибка подключения к MongoDB:", err);
  });

//* * временное решение авторизации */
app.use((req, res, next) => {
  req.user = { _id: "649581f82257db6bcfdfafd4" };

  next();
});

app.use(express.json());
app.use("/", router); //* * подключение роутинга */
app.use("/", (req, res) => {
  //* * Обработчик несуществующих маршрутов */
  res.status(404).send({ message: "Страница не найдена" });
});
