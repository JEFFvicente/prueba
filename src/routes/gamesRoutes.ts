import { Router } from 'express';
import { gamesControllers } from '../controllers/gamesControllers';



class GamesRoutes {

    public router: Router = Router();//propiedad de tipo router

    constructor() {
        this.config();
    }

    config(): void {
        //para listar todos los juegos
        this.router.get('/',gamesControllers.list);
        //para listar un juego
        this.router.get('/:id',gamesControllers.getOne);
        //metod para crear juegos
        this.router.post('/',gamesControllers.create);
        //metodo para eliminar un juego
        this.router.delete('/:id',gamesControllers.delete);
        //metodo para poder editar un juego
        this.router.put('/:id',gamesControllers.update);
    }
}

const gamesRoutes = new GamesRoutes();// instaciamos la clase
export default gamesRoutes.router;