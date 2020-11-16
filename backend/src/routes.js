import { Router } from 'express';
import SessionController from './controllers/SessionController';
import UserController from './controllers/UserController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:email', UserController.show);

export default routes;