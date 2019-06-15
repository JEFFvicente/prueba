"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default(); //ejecutamos express
        this.config();
        this.routes();
    }
    config() {
        //puerto
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); //esto es para ver las peticiones en consola
        this.app.use(cors_1.default()); //esto es para que angular pueda pedir los datos al servidor
        this.app.use(express_1.default.json()); //para trabajar con formato json
        this.app.use(express_1.default.urlencoded({ extended: false })); //Analiza las solicitudes entrantes con las cargas útiles urlencoded
    }
    routes() {
        this.app.use('0.0.0.0/', indexRoutes_1.default); //ejecutamos la ruta index
        this.app.use('0.0.0.0/api/games', gamesRoutes_1.default); //ejecutamos la ruta games
    }
    //ejecutamos el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('escucha en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server(); //instanciamos la clase
server.start(); //ejecutamos su metos start
