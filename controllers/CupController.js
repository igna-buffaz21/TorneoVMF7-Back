import CupService from "../business/CupService.js";

class CupController {
    async createCup(req, res) {
        try {
            
            const result = await CupService.createCup(req.body);

            res.status(201).json({ success: true, message: 'Copa creada exitosamente', data: result });
        } 
        catch (error) {
            console.error('Error al crear la copa:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getCups(req, res) {
        try {
            const cups = await CupService.getCups();
            
            res.status(200).json({ success: true, data: cups });
        } catch (error) {
            console.error('Error al obtener las copas:', error);
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

export default new CupController();