import jwt from 'jsonwebtoken';

import { signUpSchema, signInSchema } from '../schemas/authSchemas.js';

export async function validateToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '').trim();
    const secretKey = process.env.JWT_SECRET;
    

    if (!token) {
        return res.status(401).send("Unauthorized");
    }

    try {
        const user = jwt.verify(token, secretKey);
        if (!user) {return res.status(401);}
        
        res.locals.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export function signInValidation(req, res, next) {
    const { error } = signInSchema.validate(req.body);
    if (error) { res.sendStatus(422); }
    next();
}

export function signUpValidation(req, res, next) {
    const { error } = signUpSchema.validate(req.body);
    if (error) { res.sendStatus(422); }
    next();
}