import UsuarioService from "../business/UsuarioService.js";

class UsuarioController {
    async getAll(req, res) {
        try {
            const usuarios = await UsuarioService.getAll();
            res.json({ ok: true, usuarios });
        }
        catch (error) {
            console.error('Error al obtener usuarios:', error.message);
            res.status(500).json({ error: 'Error al obtener usuarios' });
        }
    }
}

export default new UsuarioController();