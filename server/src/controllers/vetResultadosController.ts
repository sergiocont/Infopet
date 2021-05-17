import { Request, Response } from 'express';

import pool from '../database';
import vetResultadosRoutes from '../routes/vetResultadosRoutes';

class VetResultadosController {

    public async list(req: Request, res: Response) {
        const { comuna } = req.params;
        const servicios = await pool.query('SELECT clientes.Client_Nom AS Nombre, clientes.Client_a_Cargo AS "Tipo de cliente", clientes.Client_Titulo AS Disponibilidad FROM clientes WHERE clientes.Client_Comuna = ?', [comuna]);
        res.json(servicios);
    }
    

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const servicios = await pool.query('');
        console.log(servicios);
        if (servicios.length > 0) {
            return res.json(servicios[0]);
        }
        res.status(404).json({ text: "el servicio no se encontro" });
    }
}

const vetResultadosController = new VetResultadosController();
export default vetResultadosController;