import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { JwtModule } from "@nestjs/jwt"
import { MailService } from 'src/mail/mail.service';
import { SmsService } from 'src/sms/sms.service';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),

  JwtModule.register({
    secret: "film",
    global: true 
  })

],
  controllers: [UserController],
  providers: [UserService, MailService, SmsService],
})
export class UserModule {}
