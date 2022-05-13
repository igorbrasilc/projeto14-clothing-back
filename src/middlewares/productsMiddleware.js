import categorieSchema from "../schemas/productsSchema.js";

export default async function categorieValidation(req, res, next) {
    const {categorie} = req.params;

    const categorieObj = {categorie};

    const { error } = categorieSchema.validate(categorieObj);
    if (error) return res.sendStatus(404);
    next();
}