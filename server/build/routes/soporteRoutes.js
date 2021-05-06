"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const soporteController_1 = __importDefault(require("../controllers/soporteController"));
class SoporteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', soporteController_1.default.create);
    }
}
const soporteRoutes = new SoporteRoutes();
exports.default = soporteRoutes.router;
