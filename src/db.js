import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import products from './productsDb.js';

dotenv.config();

// eslint-disable-next-line import/no-mutable-exports
let db = null;
const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await mongoClient.connect();
    db = mongoClient.db('projeto14');

    const productsDb = await db.collection('productsDb').find({}).toArray();

    if (productsDb.length === 0) await db.collection('productsDb').insertMany(products);

    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error connecting to MongoDB: ", error);
}

export default db;
