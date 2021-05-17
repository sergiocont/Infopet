import { Router } from 'express';

import vetServiciosController from '../controllers/vetServiciosController';

class VetServiciosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();

    }
    config(): void {
        this.router.get('/:id', vetServiciosController.list);
        this.router.get('/:id', vetServiciosController.getOne);
      //  this.router.post('/', vetController.create);
      //  this.router.put('/:id', vetController.update);
      //  this.router.delete('/:id', vetController.delete);
    }
}  
const vetServiciosRoutes = new VetServiciosRoutes();
export default vetServiciosRoutes.router;