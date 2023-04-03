import { Router } from 'express';
import BrandController from '../controllers/BrandController.js';
import imageUploadMiddleware from '../middlewares/imageUploadMiddleware.js';
const brandRouter = new Router();

//получить все бренды
brandRouter.get('/', BrandController.getAll);
//получить один бренд
brandRouter.get('/:id', BrandController.getOne);
//создать бренд
brandRouter.post('/create', imageUploadMiddleware.single('image'), BrandController.create);
brandRouter.delete('/:id', BrandController.delete);
export default brandRouter;
