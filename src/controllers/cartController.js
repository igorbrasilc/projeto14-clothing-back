import dayjs from "dayjs"
import { ObjectId } from "mongodb";

import db from '../db.js';

export async function getUserCart(req, res) {
    // user volta como [Object: null prototype]{user} verificar.
    const { user } = JSON.parse(JSON.stringify(res.locals));

    try {
        const userCart = await db.collection("users").findOne({ _id: ObjectId(user.id) });
        res.status(200).send(userCart.cart);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function postCart(req, res) {
    const { user } = JSON.parse(JSON.stringify(res.locals));
    const { productId, quantity } = req.body;

    // console.log(
    //   'body' , req.body
    // );
    // console.log(
    //   'user' , user
    // );
    
    try {
        const product = await db.collection("productsDb").findOne({ _id: ObjectId(productId) });
        if (!product) {
            return res.status(404).send("Product not found");
        }

        console.log(
          'product' , product
        );

        const userCart = await db.collection("users").findOne({ _id: ObjectId(user.id) });

        // console.log(
        //   'user ' , userCart
        // );

        if (!userCart.cart) {
            userCart.cart = [];
        }
        
        userCart.cart = [...userCart.cart, {productId, quantity} ];
        
        // Decrease item on database
        await db.collection("productsDb").updateOne({ _id: ObjectId(productId) }, { $inc: { stock: -quantity} });
        // Update user cart
        await db.collection("users").updateOne({ _id: ObjectId(user.id) }, { $set: { cart: userCart.cart } });
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error);
    }
}

// delete item from cart
export async function deleteCart(req, res) {
    const { user } = JSON.parse(JSON.stringify(res.locals));
    const { productId } = req.params;
  
    try {
        const userCart = await db.collection("users").findOne({ _id: ObjectId(user.id) });
        if (!userCart.cart) {
            return res.status(404).send("Cart is empty");
        }

        // Increase item on database
        const quantity = userCart.cart.filter(item => item.productId === productId);
        await db.collection("productsDb").updateOne({ _id: ObjectId(productId) }, { $inc: { stock: parseFloat(quantity[0].quantity) } });
        
        // Remove item from cart
        userCart.cart = userCart.cart.filter(item => item.productId !== productId);
        await db.collection("users").updateOne({ _id: ObjectId(user.id) }, { $set: { cart: userCart.cart } });
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error);
    }
}

// edit item from cart
export async function editCart(req, res) {
    const { user } = JSON.parse(JSON.stringify(res.locals));
    const { productId, quantity } = req.body;

    try {
        const userCart = await db.collection("users").findOne({ _id: ObjectId(user.id) });
        if (!userCart.cart) {
            return res.status(404).send("Cart is empty");
        }

        // verify if item is in stock
        const index = userCart.cart.findIndex((item) => item.productId === productId);
        if ((userCart.cart[index].quantity + quantity) < 0) {
            return res.status(400).send("Out of stock");
        }
        
        // Edit item on database
        await db.collection("productsDb").updateOne({ _id: ObjectId(productId) }, { $inc: { stock: quantity } });

        // Edit item on cart
        userCart.cart[index].quantity += quantity;        
        await db.collection("users").updateOne({ _id: ObjectId(user.id) }, { $set: { cart: userCart.cart } });
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error);
    }
}