import express from 'express';
import { add, getAll, getById, update, deletePlayer } from '../controllers/playersController';
let playerRouter = express.Router();

playerRouter.post('/', add);
playerRouter.get('/:id', getById);
playerRouter.get('/', getAll);
playerRouter.put('/:id', update);
playerRouter.delete('/:id', deletePlayer);

export default playerRouter;
