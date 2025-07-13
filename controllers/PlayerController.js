import PlayerService from "../business/PlayerService.js";

class PlayerController {
  async insert(req, res) {
    try {
      const jugador = await PlayerService.insert(req.body);

      res.status(201).json({ ok: true, data: jugador });
    } 
    catch (error) {
      res.status(400).json({ ok: false, error: error.message });
    }
  }

  async getByEquipo(req, res) {
    try {
      const { id_equipo } = req.params;

      const jugadores = await PlayerService.getByEquipo(id_equipo);

      res.json({ ok: true, data: jugadores });
    } 
    catch (error) {
      res.status(400).json({ ok: false, error: error.message });
    }
  }

  async getPlayersWithAwards(req, res) {
    try {
      const playersWithAwards = await PlayerService.getPlayersWithAwards();

      res.json({ ok: true, data: playersWithAwards });
    }
    catch (error) {
      res.status(400).json({ ok: false, error: error.message });
    }
  }

  async getAwarsForPlayer(req, res) {
    try {
      const { id } = req.params;

      const awards = await PlayerService.getAwarsForPlayer(id);

      res.json({ ok: true, data: awards });
    }
    catch (error) {
      res.status(400).json({ ok: false, error: error.message });
    }
  }
}

export default new PlayerController();
