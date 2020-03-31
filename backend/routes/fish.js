import express from 'express';
import ensureIsAuthentificated from '../helpers/authentificationGuard';
import { getAll, add, deleteFish } from '../controllers/fishController';
let fishRouter = express.Router();

fishRouter.get('/', getAll);
fishRouter.post('/', ensureIsAuthentificated, add);
fishRouter.delete('/:id', ensureIsAuthentificated, deleteFish);

export default fishRouter;
