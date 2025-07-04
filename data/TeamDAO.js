import db from '../config/db.js';

class TeamDAO {

  async getAll() {
    try {
        const [rows] = await db.query('SELECT * FROM equipos');
        return rows;
    }
    catch (error) {
        console.error('Error al obtener los equipos:', error.message);
        throw new Error('No se pudieron obtener los equipos');
    }
  }

  async insert({ nombre, correo_electronico, escudo_url }) {
    try {
        const [result] = await db.query(
            'INSERT INTO equipos (nombre, correo_electronico, escudo_url) VALUES (?, ?, ?)',
            [nombre, correo_electronico, escudo_url]
          );
          
        if (result.affectedRows === 0) {
            throw new Error('No se pudo insertar el equipo');
        }
      
        return true;
    }
    catch (error) {
        console.error('Error al insertar el equipo:', error.message);
        throw new Error('No se pudo insertar el equipo');
    }
  }
}

export default new TeamDAO();
