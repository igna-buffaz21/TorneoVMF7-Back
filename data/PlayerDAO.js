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

  async getPlayersWithAwards() {
    try {
      const [rows] = await db.query(
        `SELECT 
            COUNT(t.id) AS cantidad_trofeos,
            j.id,
            j.nombre AS nombre_jugador, 
            j.posicion, 
            j.edad, 
            j.es_federado,
            dj.goles
            FROM detalle_jugadores dj
            INNER JOIN jugadores j ON dj.id_jugador = j.id
            INNER JOIN trofeos t ON dj.id_trofeo = t.id
            GROUP BY j.id, j.nombre, j.posicion, j.edad, j.es_federado, dj.goles
            ORDER BY cantidad_trofeos DESC;`
      )
      
      return rows;
    }
    catch (error) {
      console.error('Error al obtener jugadores con premios:', error.message);
      throw new Error('Error al obtener jugadores con premios');
    }
  }

  async getAwarsForPlayer(id) {
    try {
      const [rows] = await db.query( 
        `SELECT t.nombre as nombre_trofeo , j.nombre as nombre_jugador, j.posicion, e.nombre, t.imagen_url
          FROM detalle_jugadores dj 
          INNER JOIN jugadores j ON dj.id_jugador = j.id
          INNER JOIN trofeos t ON dj.id_trofeo  = t.id
          INNER JOIN equipos e ON j.id_equipo  = e.id
          WHERE j.id = ?`,
          [id]
      )

      return rows
    }
    catch (error) {
      console.error('Error al obtener premios para el jugador:', error.message);
      throw new Error('Error al obtener premios para el jugador');
    }
  }

}

export default new PlayerDAO();
