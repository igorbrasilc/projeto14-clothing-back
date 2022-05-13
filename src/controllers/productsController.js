import {ObjectId} from 'mongodb';
import db from '../db.js';

export async function getAllProducts(req, res) {
    try {
        const products = await db.collection('productsDb').find({}).toArray();

        if (!products) return res.sendStatus(500);

        res.status(200).send(products);

    } catch (e) {
        console.log('Erro no getAllProducts', e);
        res.status(404).send("Categorie not found");
    }
}

export async function getCategorie(req, res) {
    const {categorie} = req.params;

    try {    
        const productsFiltered = await db.collection('productsDb').find({categorie}).toArray();
    
        if (productsFiltered.length === 0) return res.sendStatus(500);

        res.status(200).send(productsFiltered);
    } catch (e) {
        console.log('Erro no getCategorie', e);
        res.status(422).send("Categorie not found");
    }
}

export async function getProduct(req, res) {
    const {productId} = req.params;

    try {
        const product = await db.collection('productsDb').findOne({ _id: new ObjectId(productId) });

        res.status(200).send(product);
    } catch (e) {
        console.log('Erro no getProduct', e);
        res.status(422).send("Product not found");
    }
}