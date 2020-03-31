import express from 'express';
import { login, signUp } from '../controllers/personController';
let personRouter = express.Router();

personRouter.post('/signup', signUp);
personRouter.post('/', login);

export default personRouter;
