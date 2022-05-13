import { productIdSchema, productSchema } from "../schemas/cartSchemas.js";

export function verifyProductId(req, res, next) {
    const { error } = productIdSchema.validate(req.body);
    if (error) { res.sendStatus(422); }
    next();
}

export function verifyProduct(req, res, next) {
    const { error } = productSchema.validate(req.body);
    if (error) { res.sendStatus(422); }
    next();
}