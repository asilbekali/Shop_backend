export declare class SmsService {
    private readonly baseUrl;
    private readonly email;
    private readonly password;
    private token;
    constructor();
    ensureAuthonticate(): Promise<any>;
    authonticate(): Promise<any>;
    sendSms(phone: string, message: string): Promise<void>;
}
