import { Router } from 'express';

import { validateToken } from '../middlewares/authMiddleware.js';
import {checkoutItems} from '../controllers/checkoutController.js'

const checkoutRouter = Router();

checkoutRouter.use(validateToken);

checkoutRouter.post('/checkout', checkoutItems );