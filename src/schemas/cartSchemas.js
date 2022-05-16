import joi from 'joi';

const productSchema = joi.object({
    productId: joi.required(),
    quantity: joi.number().required()
});

const productIdSchema = joi.object({
    productId: joi.required(),
});

export { productSchema, productIdSchema };