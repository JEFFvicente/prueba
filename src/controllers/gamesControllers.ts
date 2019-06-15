import {Request, Response} from 'express';
import pool from '../database';

class GamesControllers {
    
   //para mostrar los juegos 
   public async list(req: Request, res: Response) {
       const games = await pool.query('SELECT * FROM games');
       res.json(games);
    }

    //para mostrar los juegos 
    //Promise<any> le decimos que es un metodo que ejecuta una promesa QUE un valor any
   public async getOne(req: Request, res: Response) : Promise<any>  {
    const { id } = req.params;   
    const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
    console.log(games);
    if(games.length > 0){
        return res.json(games[0]);
    }
    res.status(404).json({text: "El juego  no fue encontrado"});
 }

    //metodo para crear los juegos      
    //Promise<void> le decimos que es un metodo que ejecuta una promesa QUE No devulve nada
    public async create(req: Request, res: Response): Promise<void> {
        //hacemos un insert con lo que venga en el body
        await pool.query('INSERT INTO games set ?', [req.body]);
        console.log(req.body);
        res.json({message:"juego Guardado"});
    }


    //metodo para eliminar un juego
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;//obtenemos el id
        await pool.query('DELETE FROM games WHERE id = ?',[id]);
        res.json({message: "EL JUEGO FUE ELEMINADO"});
    }


    //metodo para actualizar un juego
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;//obtenemos el id
        await pool.query('UPDATE games SET ? WHERE id = ?',[req.body,id]);
        res.json({message: "EL JUEGO FUE EDITADO"});
    }


}

//exportamos toda la clase instanciada
export const gamesControllers = new GamesControllers();