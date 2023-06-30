const ERROR_NOT_FOUND = 404;

function getInvalidURL(req, res) {
  res.status(ERROR_NOT_FOUND).send({ message: 'Такой страницы не существует' });
}

module.exports = { getInvalidURL };
