import ApiError from '../errors/ApiError.js';
import uploadAndConvertImage from '../utils/uploadAndConvertImage.js';

class FileUploadController {
	async uploadImage(req, res, next) {
		try {
			console.log(req.body.asd);
			const imageData = req.file;
			if (!imageData) {
				throw ApiError.BadRequest();
			}
			const imageId = await uploadAndConvertImage(imageData);
			res.json({ imageId });
		} catch (error) {
			next(error);
		}
	}
}

export default new FileUploadController();
