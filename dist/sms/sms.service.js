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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let SmsService = class SmsService {
    baseUrl = "https://notify.eskiz.uz/api";
    email = "asilbekabdugafforov7@gmail.com";
    password = "iBv7Ow5eb6qJbbHZuRJXGy0JnZMiSsmekV0OoQbq";
    token = "";
    constructor() {
        this.authonticate();
    }
    async ensureAuthonticate() {
        try {
            if (!this.token) {
                await this.authonticate();
            }
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async authonticate() {
        try {
            let result = await axios_1.default.post(`${this.baseUrl}/auth/login`, {
                email: this.email,
                password: this.password,
            });
            this.token = result?.data?.data.token;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async sendSms(phone, message) {
        await this.ensureAuthonticate();
        try {
            await axios_1.default.post(`${this.baseUrl}/message/sms/send`, {
                mobile_phone: phone,
                message: "Bu Eskiz dan test",
                from: "4546",
            }, {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
            });
            console.log("sms send");
        }
        catch (error) {
            this.token = null;
            this.ensureAuthonticate();
            this.sendSms(phone, message);
        }
    }
};
exports.SmsService = SmsService;
exports.SmsService = SmsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SmsService);
//# sourceMappingURL=sms.service.js.map