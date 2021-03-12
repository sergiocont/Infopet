import { Router } from 'express';
import { format } from 'morgan';

import {indexController} from '../controllers/indexController';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
 
    }
    config(): void {
        this.router.get('/', indexController.index);
    }
}  
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;



//import { Router } from 'express';import { indexController } from '../controllers/indexController';class IndexRoutes {public router: Router = Router();constructor() {this.config();}config(): void {this.router.get('/', indexController.index);}}const indexRoutes = new IndexRoutes();export default indexRoutes.router;