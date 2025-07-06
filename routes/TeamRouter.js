import express from 'express';
import TeamController from '../controllers/TeamController.js';

const router = express.Router();

router.get('/', TeamController.getAll);
router.post('/CreateTeam', TeamController.insert);
router.get('/GetCupsByTeam/:id_equipo', TeamController.getCupsByTeam);
router.get('/GetById/:id', TeamController.getById);

export default router;
