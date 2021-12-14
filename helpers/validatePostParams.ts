import Joi from 'joi';


export const postUrlSchema = Joi.object({
	full: Joi.string().uri().required(),
    short: Joi.string(),
});

export const getUrlSchema = Joi.array().items(Joi.object({
    full_url: Joi.string().uri().required(),
}));

export const validationOptions = {
    abortEarly: false, // include all errors
    allowUnknown: false, // ignore unknown props
    stripUnknown: true, // remove unknown props
};
