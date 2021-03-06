import { Router } from 'express';

import multer from 'multer';

import multerConfig from './config/multer';

import FileController from './app/controllers/FileController';

import UserController from './app/controllers/UserController';

import AppointmentController from './app/controllers/AppointmentController';

import ProviderController from './app/controllers/ProviderController';

import SessionController from './app/controllers/SessionController';

import ScheduleController from './app/controllers/ScheduleController';

import NotificationController from './app/controllers/NotificationController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.put('/users', authMiddlewares, UserController.update);

routes.post('/sessions', SessionController.store);

routes.get('/providers', authMiddlewares, ProviderController.index);

routes.post('/appointments', authMiddlewares, AppointmentController.store);

routes.get('/appointments', authMiddlewares, AppointmentController.index);

routes.delete(
  '/appointments/:id',
  authMiddlewares,
  AppointmentController.delete
);

routes.get('/schedule', authMiddlewares, ScheduleController.index);

routes.get('/notifications', authMiddlewares, NotificationController.index);

routes.put(
  '/notifications/:id',
  authMiddlewares,
  NotificationController.update
);

routes.post(
  '/files',
  authMiddlewares,
  upload.single('file'),
  FileController.store
);

export default routes;
