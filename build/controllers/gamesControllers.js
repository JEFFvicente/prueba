"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesControllers {
    //para mostrar los juegos 
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM games');
            res.json(games);
        });
    }
    //para mostrar los juegos 
    //Promise<any> le decimos que es un metodo que ejecuta una promesa QUE un valor any
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM games WHERE id = ?', [id]);
            console.log(games);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "El juego  no fue encontrado" });
        });
    }
    //metodo para crear los juegos      
    //Promise<void> le decimos que es un metodo que ejecuta una promesa QUE No devulve nada
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //hacemos un insert con lo que venga en el body
            yield database_1.default.query('INSERT INTO games set ?', [req.body]);
            console.log(req.body);
            res.json({ message: "juego Guardado" });
        });
    }
    //metodo para eliminar un juego
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; //obtenemos el id
            yield database_1.default.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ message: "EL JUEGO FUE ELEMINADO" });
        });
    }
    //metodo para actualizar un juego
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; //obtenemos el id
            yield database_1.default.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
            res.json({ message: "EL JUEGO FUE EDITADO" });
        });
    }
}
//exportamos toda la clase instanciada
exports.gamesControllers = new GamesControllers();
