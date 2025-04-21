import { Model } from 'mongoose';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
export declare class AuthorService {
    private authorModel;
    constructor(authorModel: Model<Author>);
    create(createAuthorDto: CreateAuthorDto, file?: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, Author> & Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Author> & Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Author> & Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    update(id: string, updateAuthorDto: UpdateAuthorDto, file?: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, Author> & Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        message: string;
        author: import("mongoose").Document<unknown, {}, Author> & Author & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
}
