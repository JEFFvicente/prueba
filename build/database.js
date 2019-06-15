"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys")); //aqui esta la configuracion de bd
//para la coneccion 
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
//ejecutar la coneccion
pool.getConnection().then(connection => {
    pool.releaseConnection(connection); //realiza la coneccio
    console.log('conexxion establecida');
});
//exportamos la coneccion
exports.default = pool;
