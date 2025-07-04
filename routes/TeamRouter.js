import express from 'express';
import TeamController from '../controllers/TeamController.js';

const router = express.Router();

router.get('/', TeamController.getAll);
router.post('/CreateTeam', TeamController.insert);

export default router;
