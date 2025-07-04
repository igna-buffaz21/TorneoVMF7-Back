import express from 'express';	
import dotenv from 'dotenv';

import UsuarioRoutes from './routes/UsuarioRoutes.js'
import TeamRoutes from './routes/TeamRouter.js';
import PlayerRoutes from './routes/PlayerRoutes.js'

dotenv.config();

const app = express();
app.use(express.json());

app.use('/usuarios', UsuarioRoutes);
app.use('/teams', TeamRoutes);
app.use('/players', PlayerRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});