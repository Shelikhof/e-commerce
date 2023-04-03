import __dirname from '../__dirname.js';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import sharp from 'sharp';

const uploadAndConvertImage = async (filedata) => {
	const id = uuidv4();
	await sharp(filedata.path)
		.webp({ quality: 50 })
		.toFile(`${__dirname}\\uploads\\${id}.webp`)
		.then(() => {
			fs.unlinkSync(filedata.path);
		});
	return id;
};

export default uploadAndConvertImage;
