const cardRoute = require('express').Router();
const {
  createCard, getAllCards, likeCard, dislikeCard, deleteCard,
} = require('../controllers/card');

const { validateCardId, validateCard } = require('../utils/validators/cardValidator');

cardRoute.post('/', validateCard, createCard);
cardRoute.put('/:cardId/likes', validateCardId, likeCard);
cardRoute.get('/', getAllCards);
cardRoute.delete('/:cardId', validateCardId, deleteCard);
cardRoute.delete('/:cardId/likes', validateCardId, dislikeCard);

module.exports = cardRoute;
