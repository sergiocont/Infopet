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
class VetController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const servicios = yield database_1.default.query('SELECT * FROM Servicios');
            res.json(servicios);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const servicios = yield database_1.default.query('SELECT * FROM Servicios WHERE idServicios = ?', [id]);
            console.log(servicios);
            if (servicios.length > 0) {
                return res.json(servicios[0]);
            }
            res.status(404).json({ text: "el servicio no se encontro" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Servicios set ?', [req.body]);
            res.json({ message: 'Servicio creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE Servicios set ? WHERE idServicios = ?', [req.body, id]);
            res.json({ message: 'Servicio actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Servicios WHERE idServicios = ?', [id]);
            res.json({ message: 'Servicio eliminado' });
        });
    }
}
const vetController = new VetController();
exports.default = vetController;
