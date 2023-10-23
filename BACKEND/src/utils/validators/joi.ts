import * as Joi from "joi";

export const creatThreadSchema = Joi.object().keys({
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const loginThreadSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
