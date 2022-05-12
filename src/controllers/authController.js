import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import db from '../db.js';

export async function signUp(req, res) {
    const { name, email, password } = req.body;

    const checkUser = await db.collection('users').findOne({ email });
    if (checkUser) {return res.status(409).send("User already exists");}

    const user = req.body;
    delete user.password;

    try{
        await db.collection("users").insertOne({...user, password: await bcrypt.hash(password, 10)});
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;
    const secretKey = process.env.JWT_SECRET;
    
    try {
        const user = await db.collection("users").findOne({ email });
        if (!user) {return res.status(404).send("User not found");}

        if(user && bcrypt.compare(password, user.password)) {
            const data = {name: user.name, email: user.email, id: user._id};
            const token = jwt.sign(data, secretKey);
            
            await db.collection("sessions").insertOne({token, userId: user._id});
            res.send({user, token});
        } else{
            res.status(404).send("User not found");
        }

    } catch (error) {
        res.status(500).send(error);
    }
}