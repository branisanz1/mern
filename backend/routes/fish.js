import express from 'express';
import { getAll, add, deleteFish } from '../controllers/fishController';
import ensureIsAuthentificated from '../helpers/authentificationGuard';
let fishRouter = express.Router();

fishRouter.get('/', getAll);
fishRouter.post('/', ensureIsAuthentificated, add);
fishRouter.delete('/:id', ensureIsAuthentificated, deleteFish);

export default fishRouter;
