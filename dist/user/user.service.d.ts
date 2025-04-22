import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
import { SmsService } from 'src/sms/sms.service';
export declare class UserService {
    private readonly user;
    private readonly jwt;
    private readonly mailer;
    private readonly sms;
    constructor(user: Model<User>, jwt: JwtService, mailer: MailService, sms: SmsService);
    findUser(name: string): Promise<(import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    register(data: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    login(data: UpdateUserDto): Promise<{
        token: string;
    }>;
    userData(): Promise<string>;
}
