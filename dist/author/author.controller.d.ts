import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    create(createAuthorDto: CreateAuthorDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("./entities/author.entity").Author> & import("./entities/author.entity").Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/author.entity").Author> & import("./entities/author.entity").Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/author.entity").Author> & import("./entities/author.entity").Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    update(id: string, updateAuthorDto: UpdateAuthorDto, file?: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("./entities/author.entity").Author> & import("./entities/author.entity").Author & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        message: string;
        author: import("mongoose").Document<unknown, {}, import("./entities/author.entity").Author> & import("./entities/author.entity").Author & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
}
