import { HydratedDocument } from 'mongoose';
export type AuthorDocument = HydratedDocument<Author>;
export declare class Author {
    name: string;
    image: string;
}
export declare const AuthorSchema: import("mongoose").Schema<Author, import("mongoose").Model<Author, any, any, any, import("mongoose").Document<unknown, any, Author> & Author & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Author, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Author>> & import("mongoose").FlatRecord<Author> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
