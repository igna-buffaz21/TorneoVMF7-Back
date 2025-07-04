import UsuarioDAO from "../data/UsuarioDAO.js";

class UsuarioService {
    async getAll() {
        const usuarios = await UsuarioDAO.getAll();
        return usuarios
    }
}

export default new UsuarioService();