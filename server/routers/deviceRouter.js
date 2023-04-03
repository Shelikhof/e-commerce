import { Router } from 'express';
import DeviceController from '../controllers/DeviceController.js';
import imageUploadMiddleware from '../middlewares/imageUploadMiddleware.js';

const deviceRouter = new Router();

deviceRouter.get('/', DeviceController.getAll);
deviceRouter.get('/:id', DeviceController.getOne);
deviceRouter.post('/create', imageUploadMiddleware.single('image'), DeviceController.create);
deviceRouter.delete('/:id', DeviceController.delete);

export default deviceRouter;
