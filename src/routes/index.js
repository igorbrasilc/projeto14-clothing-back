import { Router } from 'express';

import authRouter from './authRouter.js';

import productsRouter from './productsRouter.js';
import cartRouter from './cartRouter.js';
import checkoutRouter from './checkoutRouter.js'

const router = Router();

router.use(authRouter);
router.use(productsRouter);
router.use(cartRouter);
router.use(checkoutRouter)

export default router;