import { Device } from '../models/models.js';

class DeviceSevice {
	async getAll() {}

	async getOne(id) {
		const device = Device.findByPk(id);
		return device;
	}

	async getByParams() {}

	async create(name, price, image, amount, brandId) {
		const device = await (
			await Device.create({ name, price, image, amount, brandId })
		).get({
			plain: true,
		});
		return device;
	}

	async delete(id) {
		const result = await Device.destroy({ where: { id } });
		return result;
	}
}

export default new DeviceSevice();
