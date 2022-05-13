import { Router } from 'express';

import { getUserCart, postCart, deleteCart, editCart } from '../controllers/cartController.js';
import { validateToken } from '../middlewares/authMiddleware.js';
import { verifyProductId, verifyProduct } from '../middlewares/cartMiddleware.js';

const cartRouter = Router();

cartRouter.use(validateToken);

cartRouter.get("/cart", getUserCart);
cartRouter.post("/add-to-cart", verifyProduct, postCart);
cartRouter.delete("/remove-from-cart", verifyProductId, deleteCart);
cartRouter.put("/edit-cart", verifyProduct, editCart);

export default cartRouter;