import { Router } from 'express';
import FileUploadController from '../controllers/FileUploadController.js';
import imageUploadMiddleware from '../middlewares/imageUploadMiddleware.js';

const fileUploadRouter = new Router();

fileUploadRouter.post(
	'/uploadImage',
	imageUploadMiddleware.single('image'),
	FileUploadController.uploadImage,
);

export default fileUploadRouter;
