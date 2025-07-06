import db from '../config/db.js';

class CupDAO {
    async createCup({nombre, descripcion, imagen_url}) {
        try {
            const [result] = await db.query(
                `INSERT INTO trofeos (nombre, descripcion, imagen_url) 
                 VALUES (?, ?, ?)`,
                [nombre, descripcion, imagen_url]
            );

            if (result.affectedRows === 0) {
                throw new Error('No se pudo crear la copa');
            }

            return true;

        }
        catch (error) {
            console.error('Error al crear la copa:', error);
            throw new Error('Error al crear la copa: ' + error.message);
        }
    }

    async getCups() {
        try {
            const [rows] = await db.query('SELECT * FROM trofeos');
            return rows;
        } 
        catch (error) {
            console.error('Error al obtener las copas:', error);
            throw new Error('Error al obtener las copas: ' + error.message);
        }
    }
}

export default new CupDAO();