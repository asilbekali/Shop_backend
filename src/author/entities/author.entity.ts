import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthorDocument = HydratedDocument<Author>;

@Schema()
export class Author {
  @Prop()
  name: string;

  @Prop()
  image: string
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
