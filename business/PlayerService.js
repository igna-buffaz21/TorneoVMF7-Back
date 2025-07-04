import PlayerDAO from "../data/PlayerDAO.js";

class PlayerService {

  async insert(data) {
    const { nombre, edad, posicion, es_federado, id_equipo } = data;

    if (!nombre || !edad || !posicion || id_equipo == null) {
      throw new Error('Nombre, edad, posición e id_equipo son obligatorios');
    }

    if (typeof edad !== 'number' || edad < 0) {
      throw new Error('Edad inválida');
    }

    return await PlayerDAO.insert({ nombre, edad, posicion, es_federado, id_equipo });
  }

  async getByEquipo(id_equipo) {
    if (!id_equipo) throw new Error('ID de equipo obligatorio');

    return await PlayerDAO.getByEquipo(id_equipo);
  }
}

export default new PlayerService();
