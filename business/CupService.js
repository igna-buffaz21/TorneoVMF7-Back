import CupDAO from '../data/CupDAO.js';

class CupService {
    async createCup(data) {
        const { nombre, descripcion, imagen_url } = data;
        
        if (!nombre || !descripcion || !imagen_url) {
            throw new Error('Nombre, descripción e imagen_url son obligatorios');
        }

        return await CupDAO.createCup({ nombre, descripcion, imagen_url });

    }

    async getCups() {
        return await CupDAO.getCups();
    }
}

export default new CupService();