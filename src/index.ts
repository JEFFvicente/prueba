import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from  './routes/indexRoutes';
import gamesRoutes from  './routes/gamesRoutes';
class Server {

   public app: Application;//propiedad de tipo Appllicarion

    constructor() {
        this.app = express();//ejecutamos express
        this.config();
        this.routes();
    }

    config(): void {
        //puerto
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan('dev'));//esto es para ver las peticiones en consola
        this.app.use(cors());//esto es para que angular pueda pedir los datos al servidor
        this.app.use(express.json());//para trabajar con formato json
        this.app.use(express.urlencoded({extended: false}));//Analiza las solicitudes entrantes con las cargas útiles urlencoded
    }

    routes(): void {
        this.app.use('0.0.0.0/',indexRoutes);//ejecutamos la ruta index
        this.app.use('0.0.0.0/api/games',gamesRoutes);//ejecutamos la ruta games
    }

    //ejecutamos el servidor
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('escucha en el puerto', this.app.get('port'))
        });
    }
}

const server = new Server();//instanciamos la clase
server.start();//ejecutamos su metos start