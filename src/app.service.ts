import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {  FilterQuery, Model, Types, UpdateQuery } from "mongoose";
import { CreateDeviceDto } from "./database/dtos/create-device.dto";
import { Device, DeviceDocument } from "./database/schemas/device.schema";

@Injectable()
 export class DeviceService {
    constructor(@InjectModel(Device.name) protected readonly DeviceModel : Model<DeviceDocument>) {}

    async create (createDeviceDto : CreateDeviceDto) : Promise<Device>{
        const createdDevice = new this.DeviceModel({
            _id: new Types.ObjectId(),
            ...createDeviceDto
        });
        return createdDevice.save();
    }

    async find() : Promise<Device[]> {
        const query = this.DeviceModel.find().select('-location -dashboardPriotiy -placement -equipNumber -device');
        return query.exec();
    }

    async findOne(entityFilterQuery : FilterQuery<DeviceDocument>) : Promise<Device>{
        return this.DeviceModel.findById(entityFilterQuery).exec();
    }

    async findOneAndUpdate (entityFilterQuery : FilterQuery<DeviceDocument>, updatedDevice : UpdateQuery<DeviceDocument>) : Promise<Device>{
        return this.DeviceModel.findOneAndUpdate(
            entityFilterQuery, 
            updatedDevice, {new : true}
        ).exec();
    }

    async delete(entityFilterQuery : FilterQuery<DeviceDocument>) : Promise<Device>{
        return this.DeviceModel.findByIdAndRemove(entityFilterQuery)
    }
}
