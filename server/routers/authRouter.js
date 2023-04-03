import { Router } from 'express';
import multer from 'multer';
import AuthController from '../controllers/AuthController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import { User } from '../models/models.js';

const authRouter = Router();

authRouter.get('/', authMiddleware, async (req, res) => {
	const data = await User.findAll();
	return res.json(data);
});
authRouter.post('/registration', multer().any(), AuthController.registration);
authRouter.post('/login', multer().any(), AuthController.login);
authRouter.post('/logout', AuthController.logout);
authRouter.get('/refresh', AuthController.refresh);

export default authRouter;
