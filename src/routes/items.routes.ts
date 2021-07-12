import { Router } from 'express';

const itemsRouter = Router();

itemsRouter.get('/', (request, response)=>{
    return response.json({message: "Hello Dev João!"})
});


export default itemsRouter;
