import TeamDAO from '../data/TeamDAO.js';

class TeamService {

  async getAll() {
    return await TeamDAO.getAll();
  }

  async insert(data) {
    const { nombre, correo_electronico, escudo_url } = data;

    if (!nombre || !correo_electronico || !escudo_url) {
      throw new Error('Todos los campos son obligatorios');
    }

    // Validación simple de email (opcional)
    if (!correo_electronico.includes('@')) {
      throw new Error('Correo electrónico inválido');
    }

    return await TeamDAO.insert({ nombre, correo_electronico, escudo_url });
  }
}

export default new TeamService();
