import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import UsuarioRoutes from './routes/UsuarioRoutes.js';
import TeamRoutes from './routes/TeamRouter.js';
import PlayerRoutes from './routes/PlayerRoutes.js';
import CupRoutes from './routes/CupRoutes.js';

dotenv.config();

const app = express();

// Configuración de CORS (ANTES de las rutas)
const corsOptions = {
  origin: [
    'http://localhost:4200',  // Angular dev server
    'http://localhost:3000',  // Si usas otro puerto
    'https://tu-dominio.com'  // Tu dominio en producción
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true  // Si necesitas enviar cookies
};

app.use(cors(corsOptions));

// Middleware para parsear JSON (después de CORS)
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

// Rutas de la aplicación
app.use('/usuarios', UsuarioRoutes);
app.use('/teams', TeamRoutes);
app.use('/players', PlayerRoutes);
app.use('/cups', CupRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});