import { HydratedDocument } from 'mongoose';
export type filmDocument = HydratedDocument<film>;
export declare class film {
    name: string;
    image: string;
}
export declare const filmSchema: import("mongoose").Schema<film, import("mongoose").Model<film, any, any, any, import("mongoose").Document<unknown, any, film> & film & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, film, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<film>> & import("mongoose").FlatRecord<film> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
