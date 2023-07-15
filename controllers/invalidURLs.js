const NotFoundError = require('../utils/errors/NotFoundError');

function getInvalidURL() {
  throw new NotFoundError({ message: 'Такой страницы не существует' });
}

module.exports = { getInvalidURL };
