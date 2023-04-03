import ApiError from '../errors/ApiError.js';
import DeviceService from '../services/DeviceService.js';
import uploadAndConvertImage from '../utils/uploadAndConvertImage.js';

class DeviceController {
	async getAll(req, res, next) {
		try {
		} catch (error) {
			next(error);
		}
	}

	async getOne(req, res, next) {
		try {
			const { id } = req.params;
			const device = await DeviceService.getOne(id);
			if (!device) {
				throw ApiError.BadRequest();
			}
			return res.json(device);
		} catch (error) {
			next(error);
		}
	}

	async getByParams(req, res, next) {
		try {
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		try {
			const imageData = req.file;
			const imageId = imageData
				? await uploadAndConvertImage(imageData)
				: process.env.DEFAULT_IMAGE;
			const { name, price, amount, brandId } = req.body;
			if (!name || !price || !amount || !brandId) {
				throw ApiError.BadRequest();
			}
			const device = await DeviceService.create(name, price, imageId, amount, brandId);
			return res.json(device);
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		try {
			const { id } = req.params;
			const result = await DeviceService.delete(id);
			return res.sendStatus(200);
		} catch (error) {
			next(error);
		}
	}
}

export default new DeviceController();
