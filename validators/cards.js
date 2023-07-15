import { celebrate, Joi } from 'celebrate';
import { imageLinkRegex } from '../utils/regex.js';

export const createCardCelebrate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().regex(imageLinkRegex),
  }),
});

export const cardIdCelebrate = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
});
