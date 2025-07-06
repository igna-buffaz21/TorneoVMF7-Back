import TeamService from '../business/TeamService.js';

class TeamController {

  async getAll(req, res) {
    try {
      const equipos = await TeamService.getAll();

      res.json({ ok: true, data: equipos });
    } 
    catch (error) {
      res.status(500).json({ ok: false, error: error.message });
    }
  }

  async insert(req, res) {
    try {
      const nuevo = await TeamService.insert(req.body);

      res.status(201).json({ ok: true, data: nuevo });
    } 
    catch (error) {
      res.status(400).json({ ok: false, error: error.message });
    }
  }

  async getCupsByTeam(req, res) {
    try {
      const { id_equipo } = req.params;

      const cups = await TeamService.getCupsByTeam(id_equipo);

      res.json({ ok: true, data: cups });
    }
    catch (error) {
      res.status(400).json({ ok: false, error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;

      const team = await TeamService.getById(id);

      res.json({ ok: true, data: team });
    }
    catch (error) {
      res.status(400).json({ ok: false, error: error.message });
    }
  }

}

export default new TeamController();
