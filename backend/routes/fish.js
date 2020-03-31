import express from 'express';
import { getAll, add, deleteFish, update } from '../controllers/fishController';
import ensureIsAuthentificated from '../helpers/authentificationGuard';
let fishRouter = express.Router();

fishRouter.get('/', getAll);
fishRouter.post('/', ensureIsAuthentificated, add);
fishRouter.delete('/:id', ensureIsAuthentificated, deleteFish);
fishRouter.put('/:id', ensureIsAuthentificated, update);

export default fishRouter;
