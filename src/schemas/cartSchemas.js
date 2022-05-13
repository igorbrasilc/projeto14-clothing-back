import joi from 'joi';

const productSchema = joi.object({
    productId: joi.string().required(),
    quantity: joi.number().required()
});

const productIdSchema = joi.object({
    productId: joi.string().required(),
});

export { productSchema, productIdSchema };