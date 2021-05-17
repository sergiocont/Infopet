import { Request, Response } from 'express';

import pool from '../database';
import vetServiciosRoutes from '../routes/vetServiciosRoutes';

class VetServiciosController {

    public async list(req: Request, res: Response) {
        const { id } = req.params;
        const servicios = await pool.query('SELECT clientes.Client_Nom, servicios.Serv_Nom, servicios_clientes.Precio, servicios_clientes.Descripcion FROM servicios INNER JOIN servicios_clientes JOIN clientes ON servicios.idServicios = servicios_clientes.Servicios_idServicios AND clientes.idClientes = servicios_clientes.Clientes_idClientes WHERE clientes.idClientes = ?', [id]);
        res.json(servicios);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const servicios = await pool.query('SELECT clientes.Client_Nom, servicios.Serv_Nom, servicios_clientes.Precio, servicios_clientes.Descripcion FROM servicios INNER JOIN servicios_clientes JOIN clientes ON servicios.idServicios = servicios_clientes.Servicios_idServicios AND clientes.idClientes = servicios_clientes.Clientes_idClientes WHERE clientes.idClientes = ?', [id]);
        console.log(servicios);
        if (servicios.length > 0) {
            return res.json(servicios[0]);
        }
        res.status(404).json({ text: "el servicio no se encontro" });
    }
}

const vetServiciosController = new VetServiciosController();
export default vetServiciosController;