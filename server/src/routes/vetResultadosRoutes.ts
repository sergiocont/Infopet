import { Router } from 'express';

import vetResultadosController from '../controllers/vetResultadosController';

class VetResultadosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();

    }
    config(): void {
        this.router.get('/:comuna', vetResultadosController.list);
        this.router.get('/:id', vetResultadosController.getOne);
      //  this.router.post('/', vetController.create);
      //  this.router.put('/:id', vetController.update);
      //  this.router.delete('/:id', vetController.delete);
    }
}  
const vetResultadosRoutes = new VetResultadosRoutes();
export default vetResultadosRoutes.router;