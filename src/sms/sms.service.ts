import { Injectable } from "@nestjs/common";
import axios from "axios";
import { from } from "rxjs";

@Injectable()
export class SmsService {
    private readonly baseUrl = "https://notify.eskiz.uz/api";
    private readonly email = "asilbekabdugafforov7@gmail.com";
    private readonly password = "iBv7Ow5eb6qJbbHZuRJXGy0JnZMiSsmekV0OoQbq";
    private token: any = "";

    constructor() {
        this.authonticate();
    }

    async ensureAuthonticate() {
        try {
            if (!this.token) {
                await this.authonticate();
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async authonticate() {
        try {
            let result = await axios.post(`${this.baseUrl}/auth/login`, {
                email: this.email,
                password: this.password,
            });

            this.token = result?.data?.data.token;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async sendSms(phone: string, message: string) {
        await this.ensureAuthonticate();

        try {
            await axios.post(
                `${this.baseUrl}/message/sms/send`,
                {
                    mobile_phone: phone,
                    message: "Bu Eskiz dan test",
                    from: "4546",
                },
                {
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                    },
                }
            );

            console.log("sms send");
        } catch (error) {
            this.token = null;
            this.ensureAuthonticate();
            this.sendSms(phone, message);
        }
    }
}
