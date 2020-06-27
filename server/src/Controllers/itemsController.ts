import {Request, Response} from "express"
import knex from "../database/connection"

class itemsController {
    async index (req: Request, res: Response) {
        //Requisições ao banco tem que ser feitas com o await porque a
        // aplicação vai espera a chegada dos dados antes de rodas os 
        // Próximos passos...
        const items = await knex("items").select("*")
    
        const serializedItems = items.map( item => {
            return {
                id: item.id,    
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image_url}`
            }
        })
    
        return res.json(serializedItems)
    }
}

export default itemsController