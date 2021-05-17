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
class VetServiciosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const servicios = yield database_1.default.query('SELECT clientes.Client_Nom, servicios.Serv_Nom, servicios_clientes.Precio, servicios_clientes.Descripcion FROM servicios INNER JOIN servicios_clientes JOIN clientes ON servicios.idServicios = servicios_clientes.Servicios_idServicios AND clientes.idClientes = servicios_clientes.Clientes_idClientes WHERE clientes.idClientes = ?', [id]);
            res.json(servicios);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const servicios = yield database_1.default.query('SELECT clientes.Client_Nom, servicios.Serv_Nom, servicios_clientes.Precio, servicios_clientes.Descripcion FROM servicios INNER JOIN servicios_clientes JOIN clientes ON servicios.idServicios = servicios_clientes.Servicios_idServicios AND clientes.idClientes = servicios_clientes.Clientes_idClientes WHERE clientes.idClientes = ?', [id]);
            console.log(servicios);
            if (servicios.length > 0) {
                return res.json(servicios[0]);
            }
            res.status(404).json({ text: "el servicio no se encontro" });
        });
    }
}
const vetServiciosController = new VetServiciosController();
exports.default = vetServiciosController;
