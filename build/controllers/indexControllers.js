"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexControllers {
    index(req, res) {
        res.send("hello");
    }
}
//exportamos toda la clase instanciada
exports.indexControllers = new IndexControllers();
