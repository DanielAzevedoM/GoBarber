import { Router } from 'express';

import multer from 'multer';

import multerConfig from './config/multer';

import FileController from './app/controllers/FileController';

import UserController from './app/controllers/UserController';

import AppointmentController from './app/controllers/AppointmentController';

import ProviderController from './app/controllers/ProviderController';

import SessionController from './app/controllers/SessionController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.put('/users', authMiddlewares, UserController.update);

routes.get('/providers', authMiddlewares, ProviderController.index);

routes.post('/appointments', authMiddlewares, AppointmentController.store);

routes.post(
  '/files',
  authMiddlewares,
  upload.single('file'),
  FileController.store
);

export default routes;
