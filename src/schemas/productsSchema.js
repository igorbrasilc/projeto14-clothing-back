import joi from 'joi';

const categorieSchema = joi.object({
    categorie: joi.string().valid('hat', 'bonnet', 'hood', 'cap')
})

export default categorieSchema;