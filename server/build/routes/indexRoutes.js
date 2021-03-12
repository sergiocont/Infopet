"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
//import { Router } from 'express';import { indexController } from '../controllers/indexController';class IndexRoutes {public router: Router = Router();constructor() {this.config();}config(): void {this.router.get('/', indexController.index);}}const indexRoutes = new IndexRoutes();export default indexRoutes.router;
