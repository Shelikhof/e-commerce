import ApiError from '../errors/ApiError.js';
import BrandService from '../services/BrandService.js';
import uploadAndConvertImage from '../utils/uploadAndConvertImage.js';

class BrandController {
	async getAll(req, res, next) {
		try {
			const brands = await BrandService.getAll();
			return res.json(brands);
		} catch (error) {
			next(error);
		}
	}

	async getOne(req, res, next) {
		try {
			const { id } = req.params;
			const brand = await BrandService.getOne(id);
			return res.json(brand);
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		try {
			const { name, description } = req.body;
			const imageData = req.file;
			const imageId = imageData
				? await uploadAndConvertImage(imageData)
				: process.env.DEFAULT_IMAGE;
			if (!name || !description) {
				throw ApiError.BadRequest();
			}
			const brand = await BrandService.create(name, description, imageId);
			return res.json(brand);
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		try {
			const { id } = req.params;
			const result = await BrandService.delete(id);
			return res.sendStatus(200);
		} catch (error) {
			next(error);
		}
	}
}

export default new BrandController();
