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

}

export default new TeamController();
