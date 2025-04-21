import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  password: string;

  @Prop()
  gmail: string;

  @Prop()
  phone: string;

  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
