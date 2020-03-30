import express from 'express';
import { add, getAll, getById } from '../controllers/playersController';
let playerRouter = express.Router();

playerRouter.post('/', add);
playerRouter.get('/:id', getById);
playerRouter.get('/', getAll);

export default playerRouter;
