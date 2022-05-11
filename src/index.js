import express from 'express';
import cors from cors;

import router from './routes/index.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})