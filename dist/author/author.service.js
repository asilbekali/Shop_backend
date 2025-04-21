"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const author_entity_1 = require("./entities/author.entity");
let AuthorService = class AuthorService {
    authorModel;
    constructor(authorModel) {
        this.authorModel = authorModel;
    }
    async create(createAuthorDto, file) {
        try {
            const author = new this.authorModel({
                name: createAuthorDto.name,
                image: file?.filename || null,
            });
            return await author.save();
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findAll() {
        try {
            return await this.authorModel.find();
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findOne(id) {
        try {
            const author = await this.authorModel.findById(id);
            if (!author) {
                throw new common_1.NotFoundException('Author not found');
            }
            return author;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async update(id, updateAuthorDto, file) {
        try {
            const updatedData = {
                ...updateAuthorDto,
                image: file?.filename || undefined,
            };
            const author = await this.authorModel.findByIdAndUpdate(id, updatedData, {
                new: true,
            });
            if (!author) {
                throw new common_1.NotFoundException('Author not found');
            }
            return author;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async remove(id) {
        try {
            const author = await this.authorModel.findByIdAndDelete(id);
            if (!author) {
                throw new common_1.NotFoundException('Author not found');
            }
            return { message: 'Author successfully deleted', author };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
exports.AuthorService = AuthorService;
exports.AuthorService = AuthorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(author_entity_1.Author.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuthorService);
//# sourceMappingURL=author.service.js.map