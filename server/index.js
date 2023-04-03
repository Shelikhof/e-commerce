import * as dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import express from 'express';
import sharp from 'sharp';
import sequelize from './dataBase.js';
import apiErrorsMiddleware from './middlewares/apiErrorsMiddleware.js';
import imageUploadMiddleware from './middlewares/imageUploadMiddleware.js';
import apiRouter from './routers/index.js';
import __dirname from './__dirname.js';
import uploadAndConvertImage from './utils/uploadAndConvertImage.js';

sharp.cache(false);

const app = express();

app.use(cookieParser());
app.use(express.json());

//для работы form data
// app.use(multer().any());
app.use('/images', express.static(`${__dirname}\\uploads`));

app.use('/api', apiRouter);

app.use(apiErrorsMiddleware);

app.post('/files', imageUploadMiddleware.single('filedata'), async (req, res) => {
	try {
		const filedata = req.file;
		const id = await uploadAndConvertImage(filedata);
		res.json(id);
	} catch (error) {
		console.log(error);
	}
});

const start = async () => {
	try {
		app.listen(process.env.PORT);
		await sequelize.authenticate();
		// await sequelize.sync({ force: true });
		await sequelize.sync({ alter: true });
		console.log('Server started');
	} catch (error) {
		console.log(error);
	}
};

start();
