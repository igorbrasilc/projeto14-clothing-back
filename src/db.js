import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let db = null;
const MongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await MongoClient.connect();
    db = MongoClient.db('projeto14');
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error connecting to MongoDB: ", error);
}

export default db;
