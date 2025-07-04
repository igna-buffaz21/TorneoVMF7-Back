import db from '../config/db.js';

class UsuarioDAO {
    async getAll() {
        try {
            const [rows] = await db.query('SELECT * FROM usuarios');
            return rows;
        }
        catch (error) {
            console.error('Error al obtener usuarios:', error.message);
            throw new Error('Error al obtener usuarios');
        }
    }
}

export default new UsuarioDAO();