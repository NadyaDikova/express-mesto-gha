import { celebrate, Joi } from 'celebrate';
import { imageLinkRegex } from '../utils/regex.js';

export const signupCelebrate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().regex(imageLinkRegex),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

export const signinCelebrate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

export const updateUserCelebrate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
});

export const updateAvatarCelebrate = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().regex(imageLinkRegex),
  }),
});

export const userIdCelebrate = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
});
