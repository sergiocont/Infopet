"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class VetResultadosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { comuna } = req.params;
            const servicios = yield database_1.default.query('SELECT clientes.Client_Nom AS Nombre, clientes.Client_a_Cargo AS "Tipo de cliente", clientes.Client_Titulo AS Disponibilidad FROM clientes WHERE clientes.Client_Comuna = ?', [comuna]);
            res.json(servicios);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const servicios = yield database_1.default.query('');
            console.log(servicios);
            if (servicios.length > 0) {
                return res.json(servicios[0]);
            }
            res.status(404).json({ text: "el servicio no se encontro" });
        });
    }
}
const vetResultadosController = new VetResultadosController();
exports.default = vetResultadosController;
