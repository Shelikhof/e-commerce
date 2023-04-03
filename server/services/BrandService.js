import { Brand } from '../models/models.js';

class BrandService {
	async getAll() {
		const brand = await Brand.findAll({ raw: true });
		return brand;
	}

	async getOne(id) {
		const brand = await Brand.findByPk(id, { raw: true });
		return brand;
	}

	async create(name, description, image) {
		const brand = await (await Brand.create({ name, description, image })).get({ plain: true });
		return brand;
	}

	async delete(id) {
		const result = await Brand.destroy({ where: { id } });
		return result;
	}
}

export default new BrandService();
