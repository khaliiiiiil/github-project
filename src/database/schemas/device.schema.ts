import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema()
export class Device {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;
  
  @Prop()
  name: String;

  @Prop()
  usr: String;

  @Prop()
  company: string;

  @Prop()
  pwd: String;

  @Prop()
  loginUrl: String;

  @Prop()
  jwt: String;

  @Prop()
  lastLogin: Date;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);