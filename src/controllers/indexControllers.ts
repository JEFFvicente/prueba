import {Request, Response} from 'express';

class IndexControllers {
    
   public index(req: Request, res: Response) {
        res.send("hello")
    }

}

//exportamos toda la clase instanciada
export const indexControllers = new IndexControllers();