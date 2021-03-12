import { Request, Response } from 'express';

import pool from '../database';
import vetRoutes from '../routes/vetRoutes';

class VetController {

    public async list(req: Request, res: Response) {
        const servicios = await pool.query('SELECT * FROM Servicios');
        res.json(servicios);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const servicios = await pool.query('SELECT * FROM Servicios WHERE idServicios = ?', [id]);
        console.log(servicios);
        if (servicios.length > 0) {
            return res.json(servicios[0]);
        }
        res.status(404).json({ text: "el servicio no se encontro" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO Servicios set ?', [req.body]);
        res.json({ message: 'Servicio creado' })

    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE Servicios set ? WHERE idServicios = ?', [req.body, id]);
        res.json({ message: 'Servicio actualizado' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Servicios WHERE idServicios = ?', [id]);
        res.json({ message: 'Servicio eliminado' });
    }

}

const vetController = new VetController();
export default vetController;