import express from 'express';
import { add, getAll } from '../controllers/playersController';
let playerRouter = express.Router();

playerRouter.post('/', add);
playerRouter.get('/', getAll);
export default playerRouter;
