import { Router } from 'express';
import { indexControllers } from '../controllers/indexControllers';


class IndexRoutes {

    public router: Router = Router();//propiedad de tipo router

    constructor() {
        this.config();
    }

    config(): void {
        //indexControllers.index utilizamos la clase con su metodo
        this.router.get('/', indexControllers.index);
    }
}

const indexRoutes = new IndexRoutes();// instaciamos la clase
export default indexRoutes.router;