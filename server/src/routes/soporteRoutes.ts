import { Router } from 'express';

import soporteController from '../controllers/soporteController';

class SoporteRoutes {

    public router: Router = Router();

    constructor() {
        this.config();

    }
    config(): void {
        this.router.post('/', soporteController.create);

    }
}  
const soporteRoutes = new SoporteRoutes();
export default soporteRoutes.router;