import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Device } from './device.model';
import { CreateDeviceDto } from './dto/CreateDevice.dto';
import { where } from 'sequelize';

@Injectable()
export class DeviceService {
  constructor(@InjectModel(Device) private DeviceModel: typeof Device) {}

  async create(dto: CreateDeviceDto) {
    return await this.DeviceModel.create({ ...dto });
  }

  async getOne(id: string) {
    return await this.DeviceModel.findByPk(id);
  }

  async getAll() {
    return await this.DeviceModel.findAll({});
  }

  async update(id: string, dto: CreateDeviceDto) {
    return await this.DeviceModel.update(
      { ...dto },
      { where: { id: id }, returning: true },
    ).then((result) => result[1]);
  }
}
