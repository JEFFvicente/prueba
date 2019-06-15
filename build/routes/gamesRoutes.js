"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControllers_1 = require("../controllers/gamesControllers");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router(); //propiedad de tipo router
        this.config();
    }
    config() {
        //para listar todos los juegos
        this.router.get('/', gamesControllers_1.gamesControllers.list);
        //para listar un juego
        this.router.get('/:id', gamesControllers_1.gamesControllers.getOne);
        //metod para crear juegos
        this.router.post('/', gamesControllers_1.gamesControllers.create);
        //metodo para eliminar un juego
        this.router.delete('/:id', gamesControllers_1.gamesControllers.delete);
        //metodo para poder editar un juego
        this.router.put('/:id', gamesControllers_1.gamesControllers.update);
    }
}
const gamesRoutes = new GamesRoutes(); // instaciamos la clase
exports.default = gamesRoutes.router;
