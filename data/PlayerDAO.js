import db from '../config/db.js';

class PlayerDAO {

  async insert({ nombre, edad, posicion, es_federado, id_equipo }) {
    try {
        const [result] = await db.query(
            `INSERT INTO jugadores (nombre, edad, posicion, es_federado, id_equipo) 
             VALUES (?, ?, ?, ?, ?)`,
            [nombre, edad, posicion, es_federado ? 1 : 0, id_equipo]
          );

          if (result.affectedRows === 0) {
            throw new Error('No se pudo insertar el jugador');
          }

          return true;
    }
    catch (error) {
        console.error('Error al insertar jugador:', error.message);
        throw new Error('Error al insertar jugador');
    }
  }

  async getByEquipo(id_equipo) {
    try {
        const [rows] = await db.query(
            'SELECT * FROM jugadores WHERE id_equipo = ?',
            [id_equipo]
          );
          return rows;
    }
    catch (error) {
        console.error('Error al obtener jugadores por equipo:', error.message);
        throw new Error('Error al obtener jugadores por equipo');
    }
  }
}

export default new PlayerDAO();
