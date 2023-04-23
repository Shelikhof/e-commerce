import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/CreateDevice.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Device } from './device.model';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @ApiOperation({ summary: 'Create device' })
  @ApiResponse({ status: 200, type: Device })
  @Post('/create')
  async createDevice(@Body() dto: CreateDeviceDto) {
    return await this.deviceService.create(dto);
  }

  @ApiOperation({ summary: 'Get device by uuid' })
  @ApiResponse({ status: 200, type: Device })
  @Get(':id')
  async getOneDevice(@Param('id') id: string) {
    return await this.deviceService.getOne(id);
  }

  @ApiOperation({ summary: 'Get all devices' })
  @ApiResponse({ status: 200, type: [Device] })
  @Get()
  async getAllDevices() {
    return await this.deviceService.getAll();
  }

  @ApiOperation({ summary: 'Update device info' })
  @ApiResponse({ status: 200, type: Device })
  @Put(':id')
  async updateDevice(@Param('id') id: string, @Body() dto: CreateDeviceDto) {
    return await this.deviceService.update(id, dto);
  }
}
