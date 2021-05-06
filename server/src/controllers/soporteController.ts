import { Request, Response } from 'express';

import pool from '../database';
import vetRoutes from '../routes/soporteRoutes';

class SoporteController {

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO Soporte set ?', [req.body]);
        res.json({ message: 'Pregunta creada' })
    }
}
    const vetController = new SoporteController();
    export default vetController;