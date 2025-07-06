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

  async getCupsByTeam(id_equipo) {
    if (!id_equipo) {
      throw new Error('El ID del equipo es obligatorio');
    }

    const cups = await TeamDAO.getCupsByTeam(id_equipo);
    
    return cups;
  }

  async getById(id) {
    if (!id) {
      throw new Error('El ID del equipo es obligatorio');
    }

    const team = await TeamDAO.getById(id);
      
    return team;
  }
}

export default new TeamService();
