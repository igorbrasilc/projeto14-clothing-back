import { Router } from 'express';

import { getAllProducts, getProduct, getCategorie } from '../controllers/productsController.js';
import categorieValidation from '../middlewares/productsMiddleware.js';

const productsRouter = Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/products/:categorie', categorieValidation, getCategorie);
productsRouter.get('/product/:productId', getProduct);

export default productsRouter;

