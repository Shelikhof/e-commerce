import { Router } from 'express';
import authRouter from './authRouter.js';
import brandRouter from './brandRouter.js';
import deviceRouter from './deviceRouter.js';
import fileUploadRouter from './fileUploadRouter.js';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/brand', brandRouter);
apiRouter.use('/file', fileUploadRouter);
apiRouter.use('/device', deviceRouter);

export default apiRouter;
