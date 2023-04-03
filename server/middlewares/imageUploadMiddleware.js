import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import __dirname from '../__dirname.js';

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === 'image/png' ||
		file.mimetype === 'image/jpg' ||
		file.mimetype === 'image/jpeg'
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const storageConfig = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, `${__dirname}\\uploads`);
	},
	filename: (req, file, cb) => {
		cb(null, uuidv4());
	},
});

const imageUploadMiddleware = multer({ storage: storageConfig, fileFilter: fileFilter });
export default imageUploadMiddleware;
