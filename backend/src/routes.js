import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import DashboardController from './controllers/DashboardController';
import MovieController from './controllers/MovieController';
import SessionController from './controllers/SessionController';
import UserController from './controllers/UserController';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:email', UserController.show);
routes.get('/movies', MovieController.index);
routes.get('/movies/:title', MovieController.show);
routes.post('/movies', upload.single('folder'), MovieController.store);
routes.get('/movies', MovieController.index);
routes.put('/movies/:movie_id', upload.single('folder'), MovieController.update);
routes.delete('/movies', MovieController.destroy);

routes.get('/dashboard', DashboardController.show);

export default routes;