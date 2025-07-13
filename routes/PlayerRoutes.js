import express from 'express';
import PlayerController from '../controllers/PlayerController.js';

const router = express.Router();

router.post('/CreatePlayer', PlayerController.insert);
router.get('/team/:id_equipo', PlayerController.getByEquipo);
router.get('/awards', PlayerController.getPlayersWithAwards)
router.get('/awards/:id', PlayerController.getAwarsForPlayer);

export default router;
