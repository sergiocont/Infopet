"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vetController_1 = __importDefault(require("../controllers/vetController"));
class VetRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', vetController_1.default.list);
        this.router.get('/:id', vetController_1.default.getOne);
        this.router.post('/', vetController_1.default.create);
        this.router.put('/:id', vetController_1.default.update);
        this.router.delete('/:id', vetController_1.default.delete);
    }
}
const vetRoutes = new VetRoutes();
exports.default = vetRoutes.router;
