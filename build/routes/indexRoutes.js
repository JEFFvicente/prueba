"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router(); //propiedad de tipo router
        this.config();
    }
    config() {
        //indexControllers.index utilizamos la clase con su metodo
        this.router.get('/', indexControllers_1.indexControllers.index);
    }
}
const indexRoutes = new IndexRoutes(); // instaciamos la clase
exports.default = indexRoutes.router;
