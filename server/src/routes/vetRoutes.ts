import { Router } from 'express';

import vetController from '../controllers/vetController';

class VetRoutes {

    public router: Router = Router();

    constructor() {
        this.config();

    }
    config(): void {
        this.router.get('/', vetController.list);
        this.router.get('/:id', vetController.getOne);
        this.router.post('/', vetController.create);
        this.router.put('/:id', vetController.update);
        this.router.delete('/:id', vetController.delete);
    }
}  
const vetRoutes = new VetRoutes();
export default vetRoutes.router;