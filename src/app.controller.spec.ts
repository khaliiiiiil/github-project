import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Types, UpdateQuery } from 'mongoose';
import { DeviceService } from './app.service';
import { Device, DeviceDocument } from './database/schemas/Device.schema';
import {CreateDeviceDto} from './database/dtos/create-Device.dto'
import { Delete } from '@nestjs/common/decorators';


@Controller('Devices')
export class DeviceController {
  constructor(private readonly DeviceService: DeviceService) {}

  @Post()
  async creatDevice(@Body() createDeviceDto : CreateDeviceDto) : Promise<Device>{
      return this.DeviceService.create(createDeviceDto)
  }

  @Get()
  async getDevices() : Promise<Device[]>{
      return this.DeviceService.find();
  }

  @Get(':id')
  async getDevice(@Param('id') id : Types.ObjectId) : Promise<Device>{
      return this.DeviceService.findOne(id);
  }

  @Patch(':id')
  async updateDevice(@Param('id') id : Types.ObjectId, @Body() update : UpdateQuery<DeviceDocument>) : Promise<Device>{
      return this.DeviceService.findOneAndUpdate(id , update);
  }

  @Delete(':id')
  async deleteDevice(@Param('id') id : Types.ObjectId) : Promise<Device>{
    return this.DeviceService.delete(id);
  }
}


