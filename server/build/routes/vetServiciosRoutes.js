"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vetServiciosController_1 = __importDefault(require("../controllers/vetServiciosController"));
class VetServiciosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', vetServiciosController_1.default.list);
        this.router.get('/:id', vetServiciosController_1.default.getOne);
        //  this.router.post('/', vetController.create);
        //  this.router.put('/:id', vetController.update);
        //  this.router.delete('/:id', vetController.delete);
    }
}
const vetServiciosRoutes = new VetServiciosRoutes();
exports.default = vetServiciosRoutes.router;
