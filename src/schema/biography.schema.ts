import Joi from "joi";

const id = Joi.string().uuid();
const username = Joi.string().alphanum();
const history = Joi.string().alphanum().min(3).max(15);
const createdAt = Joi.string();

const createBiographySchema = Joi.object({
	id: id.required(),
	username: username.required(),
	history: history.required(),
	createdAt: createdAt.required(),
});


const updateBiographySchema = Joi.object({
	id: id.required(),
	username: username.required(),
	history: history.required(),
});

const getBiographySchema = Joi.object({
	id: id.required()
});

export {createBiographySchema, updateBiographySchema, getBiographySchema};