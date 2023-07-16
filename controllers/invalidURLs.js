const NotFoundError = require('../utils/errors/NotFoundError');

function getInvalidURL() {
  throw new NotFoundError('Запрашиваемый адрес не найден');
}

module.exports = { getInvalidURL };
