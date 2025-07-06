import express from 'express';
import CupController from '../controllers/CupController.js';

const router = express.Router();

router.post('/CreateCup', CupController.createCup);
router.get('/GetCup', CupController.getCups);

export default router;
