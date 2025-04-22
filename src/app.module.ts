import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./user/user.module";
import { FilmModule } from "./film/film.module";
import { AuthorModule } from "./author/author.module";
import { MailModule } from "./mail/mail.module";
import { MailService } from "./mail/mail.service";
import { SmsService } from './sms/sms.service';

@Module({
    imports: [
        MongooseModule.forRoot("mongodb://localhost/film"),
        UserModule,
        FilmModule,
        AuthorModule,
        MailModule,
    ],
    controllers: [AppController],
    providers: [AppService, SmsService],
})
export class AppModule {}
