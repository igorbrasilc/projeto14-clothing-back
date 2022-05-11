import { Router } from 'express';

const router = Router();

//apagar, teste do servidor
router.get('/', (req, res) => {
    res.send("Hello World");
});

export default router;